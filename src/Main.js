import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardInfo from './components/CardInfo';
import ErrorPage from './components/ErrorPage';
import axios from 'axios';

export default class Main extends Component {
	state = {
		loading    : true,
		error      : null,
		data       : [],
		limitValue : 50,
		match      : ''
	};

	req; //helps to cancel axios after ummount

	getData = () => {
		this.setState({
			loading : true,
			error   : null
		});
		this.req = axios
			.get('https://db.ygoprodeck.com/api/v4/cardinfo.php')
			.then((res) => {
				const data = res.data[0];
				console.log(data);
				this.setState({ loading: false, data: data });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ loading: false, error: err });
			});
	};

	handleChange = (e) => {
		this.setState({ match: e.target.value });
	};

	handleClick = () => {
		this.setState({ limitValue: this.state.limitValue + 50 });
	};

	componentWillUnmount() {
		console.log('unmount component');
		this.axiosCancelSource.cancel('Component unmounted.');
	}

	componentDidMount() {
		this.axiosCancelSource = axios.CancelToken.source();
		this.getData();
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path='/yugioh-deckbuilder/'
						render={(gaa) => (
							<App state={gaa} change={this.handleChange} click={this.handleClick} main={this.state} />
						)}
					/>
					<Route exact path='/yugioh-deckbuilder/:cardId' component={CardInfo} />
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

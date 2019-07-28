import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import CardsList from './components/CardsList';
import './App.css';
import Loading from './components/Loading';

export default class App extends Component {
	state = {
		loading    : true,
		error      : null,
		data       : [],
		limitValue : 50,
		match      : ''
	};
	req;
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
			<div>
				<h1>Cards</h1>
				<input type='text' className='form-control' onChange={this.handleChange} value={this.state.match} />
				<button className='btn btn-dark mb-4' onClick={this.handleClick}>
					Show more!
				</button>
				{this.state.loading ? <Loading /> : null}
				<CardsList
					data={this.state.data
						.filter((element) => {
							return element.name.toLowerCase().includes(this.state.match.toLowerCase());
						})
						.slice(1, this.state.limitValue)
						.reverse()}
				/>
			</div>
		);
	}
}

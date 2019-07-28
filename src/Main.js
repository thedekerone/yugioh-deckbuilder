import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CardInfo from './components/CardInfo';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App} />
					<Route exact path='/:cardId' component={CardInfo} />
				</Switch>
			</BrowserRouter>
		);
	}
}
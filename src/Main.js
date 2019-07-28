import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardInfo from './components/CardInfo';
import ErrorPage from './components/ErrorPage';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/yugioh-deckbuilder/' component={App} />
					<Route exact path='/yugioh-deckbuilder/:cardId' component={CardInfo} />
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

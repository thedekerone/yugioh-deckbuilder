import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import CardsList from './components/CardsList';
import './App.css';
import Loading from './components/Loading';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Cards</h1>
				<input
					type='text'
					className='form-control'
					onChange={this.props.change}
					value={this.props.main.match}
				/>
				<button className='btn btn-dark mb-4' onClick={this.props.click}>
					Show more!
				</button>
				{this.props.main.loading ? <Loading /> : null}
				<CardsList
					data={this.props.main.data
						.filter((element) => {
							return element.name.toLowerCase().includes(this.props.main.match.toLowerCase());
						})
						.slice(1, this.props.main.limitValue)
						.reverse()}
				/>
			</div>
		);
	}
}

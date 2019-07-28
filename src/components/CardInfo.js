import React, { Component } from 'react';
import Loading from './Loading';

export default class CardInfo extends Component {
	state = {
		target : this.props.location.state.carta
	};

	render() {
		if (this.state.loading === true) {
			return (
				<div className='loading'>
					<Loading />
				</div>
			);
		}
		return (
			<React.Fragment>
				<h1>{this.state.target.name}</h1>
				<div className='loading card mb-3 ' style={{ maxWidth: ' 840px' }}>
					<div className='row no-gutters'>
						<div className='col-md-4'>
							<img src={this.state.target.image_url} alt='' width='300px' />
						</div>
						<div className='col-md-8'>
							<p className='ml-4 col-md-8'>{this.state.target.desc}</p>
						</div>
					</div>
				</div>
				<div>
					ebay:<button className='btn btn-primary'> {this.state.target.ebay_price}</button>
				</div>
				<div>
					amazon:<button className='btn btn-primary'> {this.state.target.amazon_price}</button>
				</div>
			</React.Fragment>
		);
	}
}

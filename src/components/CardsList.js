import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function CardsList({ data }) {
	return (
		<div className='CardsList'>
			<ul>
				{data.map((card) => {
					return (
						<li key={card.id}>
							<Link
								to={{
									pathname : '/' + card.id,
									state    : {
										carta : card
									}
								}}>
								<Card card={card} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

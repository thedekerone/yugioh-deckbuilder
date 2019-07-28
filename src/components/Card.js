import React from 'react';

export default function Card({ card }) {
	return (
		<React.Fragment>
			<img src={card.image_url} alt='' width='100px' />
		</React.Fragment>
	);
}

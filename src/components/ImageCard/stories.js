import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ImageCard } from './ImageCard';

const href = 'http://www.tottus.cl/tottus/search/_/N-bcpc1b?Ntt=tottus';
const imgSrc = 'http://www.tottus.cl/static/img/home/mundo7-min.png';
const padding = '15px';

storiesOf('ImageCard').add('Primary', () => (
	<div
		style={{
			width: '60%',
			overflow: 'auto',
			padding: '20px',
			border: '1px solid red',
		}}
	>
		<ImageCard {...{ href, imgSrc }} />
	</div>
));

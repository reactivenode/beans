import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { Card } from './Card';

const href = '/sodimac-cl/category/cat4850368/?cid=ctghom101624';
const imgSrc =
	'https://sodimac.scene7.com/is/image/SodimacCL/main-01-2211-maletas?wid=410&amp;qlt=80';
const linkText = 'Ver categoría >';
const title = 'Organización de viajes y maletas';
const info = 'Rompe la rutina y ¡que nada se quede atras!';
let border = `5px solid black`;
let padding = '10px';
let height = '400px';
let overflow = 'hidden';

storiesOf('Card')
	.addDecorator(withKnobs)
	.add('Card with no styling', () => (
		<div style={{ width: '50%', border: '1px solid red' }}>
			<Card {...{ href, imgSrc, linkText, title, info }} />
		</div>
	))
	.add('Card with Border', () => (
		<div style={{ width: '50%', border: '1px solid red' }}>
			<Card {...{ href, imgSrc, linkText, title, info, border }} />
		</div>
	))
	.add('Card with Overflow hidden', () => (
		<div style={{ width: '50%', border: '1px solid red' }}>
			<Card {...{ href, imgSrc, linkText, title, info, border, overflow }} />
		</div>
	))
	.add('Card with 15px Padding', () => (
		<div style={{ width: '50%', border: '1px solid red' }}>
			<Card {...{ href, imgSrc, linkText, title, info, border, padding }} />
		</div>
	));

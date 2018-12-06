import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
// Import our component from this folder
import { Row, Col } from '../Grid';

const divStyle = (color) => {
	let border = `5px solid ${color}`;
	let minWidth = '50px';
	let minHeight = '100px';
	return { border, minHeight, minWidth };
};

const Box = (props) => (
	<div style={divStyle(props.color)}>{props.children}</div>
);

storiesOf('Grid').add('Nested Rows and columns', () => (
	<Box color="white">
		<Row>
			<Col sm="12" md="4">
				MD-4
				<Row>
					<Col xs="6" sm="3">
						<Box color="yellow">XS-6 SM-3</Box>
					</Col>
					<Col xs="6" sm="9">
						<Box color="yellow">XS-6 SM-9</Box>
					</Col>
				</Row>
			</Col>
			<Col sm="6" md="4">
				MD-4
				<Row>
					<Col xs="4" md="6" sm="9">
						<Box color="purple">XS-4 MD-6 SM-9</Box>
					</Col>
					<Col xs="8" md="6" sm="3">
						<Box color="purple">XS-8 MD-6 SM-3</Box>
					</Col>
				</Row>
			</Col>
			<Col sm="6" md="4">
				MD-4
				<Box color="green" />
			</Col>
		</Row>
	</Box>
));

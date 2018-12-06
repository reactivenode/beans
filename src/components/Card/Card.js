import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	border: ${(props) => props.border || '1px solid #c8c8c8'};
	overflow: ${(props) => props.overflow || 'auto'};
	padding: ${(props) => props.padding || '5px'};
	a {
		text-decoration: none;
	}
	:hover {
		content: '';
		background-color: rgba(255, 255, 255, 0.7);
		opacity: 0.5;
		-webkit-transition: All 0.3s ease;
		-moz-transition: All 0.3s ease;
		-o-transition: All 0.3s ease;
		transition: All 0.3s ease;
	}
`;

const CardImage = styled.img`
  width: 100%;
  height:${(props) => props.imageHeight || 'auto'}
  max-width: 100%;
`;

const CardInfoWrapper = styled.div`
	width: 100%;
	height: 90px;
	margin-top: 10px;
`;

const Title = styled.div`
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 20px;
	font-weight: 500;
	line-height: 140%;
	color: #000;
`;

const Info = styled.div`
	font-size: 18px;
	font-weight: 300;
	margin-top: 0.3em;
	color: #333;
`;

const ActionLink = styled.div`
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	margin-top: 10px;
	color: #0072ce;
`;

const CardInfo = (props) => {
	const { title, info, linkText } = props;
	return (
		<React.Fragment>
			<Title>{title}</Title>
			<Info>{info}</Info>
			<ActionLink>{linkText}</ActionLink>
		</React.Fragment>
	);
};
const CardElem = (props) => {
	const { imgSrc, alt, href } = props;
	return (
		<a href={href || '#'}>
			<CardImage src={imgSrc || ''} alt={alt} />
			<CardInfoWrapper {...props}>
				<CardInfo {...props} />
			</CardInfoWrapper>
		</a>
	);
};

const Card = (props) => (
	<CardWrapper {...props}>
		<CardElem {...props} />
	</CardWrapper>
);

export { Card };

import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	color: ${(props) => (props.primary ? '#fff' : '#dd0021')}
	background:${(props) => (props.primary ? '#dd0021' : '#fff')}
	padding: 8px 15px;
	height:${(props) => props.height || '40px'}
	border:${(props) => (props.primary ? 'none' : '1px solid #dd0021')} ;
	outline: none;
	font-weight: 700;
	width:100%;
	:hover{
			background:${(props) => (props.primary ? '#b5001b' : '#dd0021')}	  
    		color:${(props) => props.secondary && '#fff'}
	}
`;

const Button = (props) => (
	<ButtonWrapper {...props}>{props.children}</ButtonWrapper>
);
export { Button };

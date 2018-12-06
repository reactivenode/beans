import React from 'react';
import styled from 'styled-components';

const ImageCardWrapper = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  border: ${(props) => props.border || 'none'};
  overflow:${(props) => props.overflow || 'auto'}
  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.1);
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    transition: All 0.5s ease;
  }
`;

const CardImage = styled.img`
	width: 100%;
	height: auto;
	vertical-align: middle;
	border-style: none;
`;

const ImageCard = (props) => {
	const { imgSrc, alt, href, ...rest } = props;
	return (
		<ImageCardWrapper {...rest}>
			<a href={href || '#'}>
				<CardImage src={imgSrc || ''} alt={alt} />
			</a>
		</ImageCardWrapper>
	);
};

export { ImageCard };

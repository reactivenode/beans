import styled from 'styled-components';

function getColumnWidth(size) {
	if (!size) return;
	let width = (size / 12) * 100;
	return `width:${width}%`;
}

const Col = styled.div`
	float: left;
	${({ xs }) => (xs ? getColumnWidth(xs) : 'width:100%')};

	@media only screen and (min-width: 540px) {
		${({ sm }) => sm && getColumnWidth(sm)};
	}
	@media only screen and (min-width: 768px) {
		${({ md }) => md && getColumnWidth(md)};
	}
	@media only screen and (min-width: 1008px) {
		${({ lg }) => lg && getColumnWidth(lg)};
	}
	@media only screen and (min-width: 1260px) {
		${({ xl }) => xl && getColumnWidth(xl)};
	}
`;

export { Col };

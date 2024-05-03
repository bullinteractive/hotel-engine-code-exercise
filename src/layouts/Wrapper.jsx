import styled from 'styled-components';

export const Wrapper = styled.div`
	width: ${(props) => (props.width ? props.width : '100%')};
	color: ${(props) => (props.color ? props.color : '#586069')};
	display: ${(props) => (props.display ? props.display : 'flex')};
`;

export default Wrapper;

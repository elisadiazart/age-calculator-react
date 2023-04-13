import styled from 'styled-components';

const StyledDiv = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	width: 170px;
	gap: 0.5rem;
	color: #716f6f;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.25em;
`;

const StyledInput = styled.input`
	border-radius: 6px;
	border: 1px solid #dcdcdc;
	font-size: 2rem;
	padding: 0.7rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	color: black;

	&:focus {
		outline: 2px solid #854dff;
	}
`;

export { StyledDiv, StyledInput };

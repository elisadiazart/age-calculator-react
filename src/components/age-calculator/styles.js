import styled from 'styled-components';

const StyledAgeCalculator = styled.div`
	width: 60%;
	min-width: 680px;
	background-color: white;
	margin: auto;
	margin-top: 6rem;
	padding-bottom: 4rem;
	border-radius: 24px 24px 200px 24px;
	position: relative;
`;

const StyledInputs = styled.div`
	padding: 2rem 0;
	display: flex;
	border-bottom: 1px solid #dcdcdc;
	margin: 0 4rem;
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

export { StyledAgeCalculator, StyledInputs, StyledInput, StyledDiv };

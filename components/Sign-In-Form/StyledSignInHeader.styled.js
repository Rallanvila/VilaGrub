import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const StyledSignInForm = styled.form`
	display: flex;
	align-items: center;
	.card-content {
		display: flex;
		flex-direction: column;
		padding: 3rem 2rem 10rem;
		width: 100%;
		.text-field {
			width: 100%;
			margin-bottom: 2rem;
		}
		.forgot {
			font-weight: 700;
			text-decoration: underline;
			margin-bottom: 1rem;
			cursor: pointer;
			color: #1976d2;
		}
	}
`;

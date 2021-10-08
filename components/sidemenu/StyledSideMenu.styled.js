import styled from "styled-components";

export const StyledSideMenu = styled.nav`
	display: none;
	@media screen and (min-width: 1008px) {
		display: block;
		a {
			display: block;
			font-weight: 600;
			opacity: 0.7;
			cursor: pointer;
			margin-bottom: 2rem;
		}
	}
`;

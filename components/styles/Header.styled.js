import styled from "styled-components";

export const Nav = styled.nav`
	width: 100%;
	padding: 1rem;
	-webkit-box-shadow: -3px 5px 7px 0px rgba(0, 0, 0, 0.52);
	box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.32);
	position: relative;
	z-index: 20;
	overflow-x: hidden;
	display: flex;
	.logo {
		margin-right: 2rem;
	}
	.nav__link {
		margin-right: 1rem;
		font-weight: 600;
	}
`;

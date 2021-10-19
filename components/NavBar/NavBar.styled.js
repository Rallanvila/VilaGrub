import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const Nav = styled.nav`
	width: 100%;
	padding: 1rem;
	-webkit-box-shadow: -3px 5px 7px 0px rgba(0, 0, 0, 0.52);
	box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.32);
	position: relative;
	z-index: 20;
	overflow-x: hidden;
	display: flex;
	justify-content: space-between;
	.logo {
		margin-right: 2rem;
	}
	.nav__link {
		display: none;
		margin-right: 1rem;
		font-weight: 600;
	}
	.fas {
		display: none;
		font-size: 1.2rem;
		margin-right: 1rem;
		cursor: pointer;
	}
	.title {
		display: none;
		font-weight: 600;
		cursor: pointer;
		font-size: 1rem;
		margin-right: 1rem;
	}
	.nav__btn {
		display: none;
	}
	.fa-bars {
		display: block;
	}

	@media screen and (min-width: 780px) {
		.navbar__expanded {
			display: none;
		}
		.fa-bars {
			display: none;
		}
		.nav__link {
			display: block;
			margin-right: 1rem;
			font-weight: 600;
		}
		.fas {
			display: block;
			font-size: 1.2rem;
			margin-right: 1rem;
			cursor: pointer;
		}
		.title {
			display: block;
			font-weight: 600;
			cursor: pointer;
			font-size: 1rem;
			margin-right: 1rem;
		}
		.nav__btn {
			display: block;
			margin-right: 1rem;
		}
	}
`;

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
	z-index: 100;
	overflow-x: hidden;
	overflow-y: visible;
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
	.navbar__expanded {
		position: absolute;
		opacity: 0;
		width: 100vw;
		top: 100px;
		transform: translateX(200%);
		transition: opacity 0.5s, transform 0.5s;
		background: #fff;
		z-index: 100;
		&.active {
			opacity: 1;
			transform: translateX(0);
		}
		.nav__find-store {
			margin-top: 2rem;
		}
		.navbar__item {
			display: block;
			font-size: 1.3rem;
			margin-bottom: 1rem;
			color: #000;
			cursor: pointer;
			&:hover {
				font-weight: 500;
			}
		}
		.navbar__account {
			border-top: rgba(214, 211, 214, 0.933) 1px solid;
			padding-top: 2rem;
			.nav__btn {
				margin-right: 1rem;
			}
			.navbar__find-store {
				display: flex;
				align-items: center;
				transition: color 0.15s;
				&:hover {
					color: $color-primary;
				}
				.fas {
					margin-right: 1rem;
					cursor: pointer;
				}
				.title {
					font-weight: 600;
					cursor: pointer;
					font-size: 1.1rem;
				}
			}
		}
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

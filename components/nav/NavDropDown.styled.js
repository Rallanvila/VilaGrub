import styled from "styled-components";

export const NavDropDown = styled.div`
	position: absolute;
	/* opacity: 0; */
	width: 100vw;
	/* transform: translateX(200%); */
	transition: opacity 0.5s, transform 0.5s;
	padding: 1rem 1rem;
	background: #fff;
	z-index: 10;
	&.navbar__expanded.navbar__750px {
		display: none;
	}
	&.active {
		opacity: 1;
		transform: translateX(0);
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
		.btn {
			margin-right: 1rem;
			margin-bottom: 2rem;
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
`;

import styled from "styled-components";

export const Container = styled.div`
	max-width: 100%;
	width: 1320px;
	padding: 0 2rem;
	margin: 0 auto;
	overflow: hidden;
	background: ${({ bg }) => bg};
	color: ${({ color }) => color};
	.navbar__expanded {
		position: absolute;
		opacity: 0;
		width: 100vw;
		transform: translateX(200%);
		transition: opacity 0.5s, transform 0.5s;
		padding: 1rem 1rem;
		background: #fff;
		z-index: 10;
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
			.nav__btn {
				margin-left: 1rem;
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
	}
	@media screen and (min-width: 780px) {
		.navbar__expanded {
			display: none;
		}
	}
`;

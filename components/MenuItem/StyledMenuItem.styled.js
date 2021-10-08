import styled from "styled-components";

export const StyledMenuItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	cursor: pointer;
	.image {
		border-radius: 50%;
		object-position: center;
		object-fit: cover;
		width: 75px;
		height: 75px;
	}
	a {
		margin-left: 2rem;
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		color: #212529;
	}
	@media screen and (min-width: 1000px) {
		.image {
			width: 112px;
			height: 112px;
		}
		a {
			font-size: 1.1rem;
		}
	}
`;

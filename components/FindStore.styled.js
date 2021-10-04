import styled from "styled-components";

export const FindStoreStyled = styled.div`
	display: flex;
	align-items: center;
	transition: color 0.15s;
	&:hover {
		color: $color-primary;
	}
	.fas {
		margin-right: 1rem;
		cursor: pointer;
		margin-right: 1rem;
	}
	.title {
		font-weight: 600;
		cursor: pointer;
		font-size: 1.1rem;
	}
`;

import styled from "styled-components";

export const SpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.nav__left,
	.nav__right {
		display: flex;
		align-items: center;
	}
	.nav__right svg {
		font-size: 1.5rem;
		margin-right: 0.5rem;
	}
`;

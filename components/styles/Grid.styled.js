import styled from "styled-components";

export const Grid = styled.div`
	display: flex;
	width: 100%;
	height: 500px;
	max-width: 1320px;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	margin: 1rem auto;
	position: relative;
	flex-direction: column-reverse;
    background: ${({ bg }) => bg};

	@media screen and (min-width: 780px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
        height: 100%
		max-width: 1320px;
		justify-items: center;
	}
`;

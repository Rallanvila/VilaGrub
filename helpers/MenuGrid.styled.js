import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const MenuGrid = styled.div`
	width: 100%;
	max-width: 1320px;
	margin: 2rem auto;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1008px) {
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: 1fr;
	}
`;

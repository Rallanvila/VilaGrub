import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const FlexCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: ${({ bg }) => bg};
`;

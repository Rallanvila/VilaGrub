import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const Button = styled.a`
	border-radius: 20px;
	transition: opacity 0.15s, transform 0.15s;
    padding: .5rem 1rem;
    border: none;
    font-size: 1rem;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#333"};
    border: ${({ border }) => `${border} 1px solid` || "none"};
	&:hover {
		opacity: .9;
        transform: scale(0.98);
`;

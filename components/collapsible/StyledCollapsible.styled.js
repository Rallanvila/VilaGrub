import styled from "styled-components";

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const StyledCollapsible = styled.div`
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h2 {
			font-size: 1.2rem;
			margin-top: 0;
			font-weight: 600;
			cursor: pointer;
		}
		i {
			transition: transform 0.3s;
			margin: 1rem;
			transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out,
				background 0.2s ease-in-out, transform 0.2s ease-in-out;
			border-radius: 50%;
			cursor: pointer;
			&:hover {
				padding: 1rem;
				margin: 0;
				background: lightgrey;
			}
		}
	}
	a {
		overflow: hidden;
		transition: font-weight 0.15s;
		color: black;
		display: block;
		margin-bottom: 1rem;
		cursor: pointer;
	}
`;

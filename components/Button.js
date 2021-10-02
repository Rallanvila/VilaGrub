import styled from "styled-components";

export const Button = styled.button`
	border-radius: 20px;
	transition: opacity 0.15s, transform 0.15s;
    border: none;
    padding: .5rem 1rem;
    font-size: 1rem;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#333"};
	&:hover {
		opacity: .9;
        transform: scale(0.98);
	
	/* &.btn-light {
		border: 1px $color-black solid;
		transition: background 0.15s;
		&:hover {
			background: rgb(241, 241, 241);
		}
	}
	&.btn-clear {
		border: 1.5px $color-black solid;
		font-weight: 500;
		transition: background 0.15s;
		&:hover {
			background: rgba(241, 241, 241, 0.5);
		}
	}
	&.btn-white {
		border: 1.5px #fff solid;
		color: #fff;
		font-weight: 500;
		transition: background 0.15s;
		&:hover {
			background: rgba(255, 255, 255, 0.16);
		}
	} */
`;

import { AiTwotoneShopping } from "react-icons/ai";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export function Cart() {
	const [count, setCount] = useState(0);

	function updateCart() {
		setCount(count + 1);
	}

	function centerCartNumber() {
		count < 10
			? `style={{left: '32%', top: 32%}}`
			: `style={{left: '26%', top: 32%}}`;
	}

	return (
		<>
			<StyledCart>
				<Button
					variant="contained"
					size="large"
					color="success"
					onClick={updateCart}
				>
					Add to Order
				</Button>
				<div className="shopping-cart">
					<span>{count === 0 ? "" : `${count}`}</span>
					<AiTwotoneShopping style={{ fontSize: "3rem", color: "#89a525" }} />
				</div>
			</StyledCart>
		</>
	);
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const StyledCart = styled.div`
	width: 100%;
	background: #294442;
	padding: 1rem 2rem;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 3;
	display: flex;
	justify-content: flex-end;

	button {
		border-radius: 20px;
		position: absolute;
		top: -90%;
		right: 5%;
	}
	.shopping-cart {
		position: relative;
		span {
			z-index: 3;
			color: #fff;
			font-size: 1.3rem;
			font-weight: 600;
			left: 36%;
			top: 32%;
			position: absolute;
		}
	}
`;

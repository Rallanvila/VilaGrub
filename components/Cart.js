import { AiOutlineSafetyCertificate, AiTwotoneShopping } from "react-icons/ai";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { CartContext } from "../lib/context";
import { useLocalStorage } from "../lib/useLocalStorage";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------
export function Cart() {
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext);

	function getStorageValue(key, defaultValue) {
		// getting stored value
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem(key);
			const initial = saved !== null ? JSON.parse(saved) : defaultValue;
			return initial;
		}
	}
	// const cartLength = name.length;
	const cartLength = cart.length;

	const {
		loginWithRedirect,
		user,
		isAuthenticated,
		isLoading,
		logout,
	} = useAuth0();

	return (
		<>
			{cart.length > 0 ? (
				<>
					<StyledCart>
						<div className="shopping-cart">
							<span>{cart.length === 0 ? null : `${cart.length}`}</span>
							<AiTwotoneShopping
								style={{ fontSize: "3rem", color: "#89a525" }}
							/>
						</div>
					</StyledCart>
				</>
			) : (
				""
			)}
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

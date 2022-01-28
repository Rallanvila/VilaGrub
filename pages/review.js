import { Button, Card, Link } from "@mui/material";
import Image from "next/image";
import { Grid } from "../helpers/Grid.styled";
import { BsChevronLeft } from "react-icons/bs";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import Card_MenuItem from "../components/Card_MenuItem";
import Payment from "../components/Payment";
import { useContext, useEffect } from "react";
import { CartContext } from "../lib/context";

// -------------------------------------------
// **  PAGE
// -------------------------------------------

export default function Review() {
	const { cart, setCart } = useContext(CartContext);
	//TODO: Set it so when item is added to state, it assigns an id +1 of the highest id in the local storage.
	useEffect(() => {
		let cartClone = [...cart];
		let cartCloneIds = [];
		let lastItem = cartClone[cartClone.length - 1];
		console.log("cartClone: ", cartClone);
		//Sets first id in cart if cart is 0
		if (cartClone[0].id > 0) {
			return;
		}
		if (cart.length === 1) {
			cartClone[0].id = 1;
			return setCart(cartClone);
		}
		// if (cart.length) {
		// }
		console.log("cart: ", cart);
	}, [cart]);

	function handleAdd(event) {
		let addItem = cart.filter((item) => event === item.id);
		let addItemClone = [...addItem];
		let itemToAdd = addItemClone[0];
		itemToAdd.id = itemToAdd.id + 1;
		console.log(itemToAdd);
		const newCart = [...cart, itemToAdd];
		setCart(newCart);
		console.log("cart: ", cart);
	}
	return (
		<Grid
			style={{
				maxWidth: "100%",
				justifyItems: "flex-start",
				alignItems: "flex-start",
				margin: "0",
			}}
		>
			<LeftSide>
				<Header>
					<Link href="/">
						<Image src={logo} alt="logo" width={75} height={75} />
					</Link>
					<Header>
						<BsChevronLeft />
						<Link href="./menu">Back to Menu</Link>
					</Header>
				</Header>
				<Body>
					<div>
						<h2>Review Order (Cart State)</h2>
						<p>Prep time: 3-6min</p>
						<span>Pickup store</span>
						<h3>University Pkwy & Tuttle</h3>
					</div>
				</Body>
			</LeftSide>

			<ReviewOrder>
				{cart.length === 0
					? "You have nothing in your cart yet."
					: cart.map((item) => (
							<Card_MenuItem
								key={item.id}
								item={item}
								handleRemove={handleRemove}
								handleAdd={handleAdd}
							/>
					  ))}
				{/* {cart.map((item) => (
					<Card_MenuItem
						key={item.id}
						item={item}
						handleRemove={handleRemove}
						handleAdd={handleAdd}
					/>
				))} */}
			</ReviewOrder>
		</Grid>
	);

	function handleRemove(e) {
		const removeItem = cart.filter((item) => e !== item.id);
		setCart(removeItem);
	}
	console.log("cart: ", cart);

	// useEffect(() => {
	// 	let cartClone = [...cart];
	// 	if (cart.length > 1) {
	// 		let lastId = cartClone[cartClone.length - 1].id;
	// 		let lastItem = cartClone[cartClone.length - 1];
	// 		//Creates new Array of all ids to compare
	// 		let allIds = [];
	// 		for (const ids in cartClone) {
	// 			allIds.push(cartClone[ids].id);
	// 		}
	// 		console.log("allIds: ", allIds);
	// 		const filtered = allIds.filter((id) => id === lastId);
	// 		if (filtered.length > 1) {
	// 			lastItem.id = cartClone.length;
	// 			setCart(cartClone);
	// 		}
	// 	}

	// console.log("cartClone: ", cartClone);
}
{
	/* <Payment /> */
}
{
	/* <Button
    size="large"
    color="success"
    variant="contained"
    style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        borderRadius: "20px",
    }}
>
    Cart Price
</Button> */
}

// -------------------------------------------
// **  STYLED-COMPONENTS
// -------------------------------------------

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		margin-right: 1.5rem;
		color: #fff;
		font-weight: 600;
	}
	svg {
		font-size: 1.2rem;
		margin-right: 0.3rem;
		color: #fff;
		font-weight: 600;
	}
	span {
		color: #fff;
		font-weight: 600;
	}
`;

const LeftSide = styled.div`
	display: flex;
	color: white;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 2rem;
	width: 100%;
	height: 100vh;
	background: #294442;
`;

const Body = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	flex-direction: column;
	text-align: start;
	h2 {
		margin-bottom: 0.5rem;
	}
	h3 {
		margin: 0.4rem 0 0;
	}
	p {
		opacity: 0.7;
		margin: 0 0 2rem;
	}
`;
const ReviewOrder = styled.div`
	padding: 2rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

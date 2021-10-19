import { Button, Card, Link } from "@mui/material";
import Image from "next/image";
import { Grid } from "../helpers/Grid.styled";
import { BsChevronLeft } from "react-icons/bs";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { StyledMenuItem } from "../components/MenuItem/StyledMenuItem.styled";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Card_MenuItem from "../components/Card/Card_MenuItem";
import Payment from "../components/Payment/Payment";

// -------------------------------------------
// **  PAGE
// -------------------------------------------

export default function Review() {
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
						<span>Back to Menu</span>
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
				<Card_MenuItem />
				<Payment />
			</ReviewOrder>
			<Button
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
			</Button>
		</Grid>
	);
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

import { Card, Link } from "@mui/material";
import Image from "next/image";
import { Grid } from "../helpers/Grid.styled";
import { BsChevronLeft } from "react-icons/bs";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { StyledMenuItem } from "../components/MenuItem/StyledMenuItem.styled";

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
	width: 100%;
	height: 100vh;
	background: #294442;
`;

const ReviewOrder = styled.div``;

export default function Review() {
	return (
		<Grid
			style={{ maxWidth: "100%", justifyContent: "flex-start", margin: "0" }}
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
			</LeftSide>

			<ReviewOrder>
				<Card>
					<StyledMenuItem>
						<Image
							className="image"
							src="https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="drink"
							width="112"
							height="112"
						/>
						<Link href="#">Hot Coffee</Link>
					</StyledMenuItem>
				</Card>
			</ReviewOrder>
		</Grid>
	);
}

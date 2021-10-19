import { Card } from "@mui/material";
import { StyledMenuItem } from "../MenuItem/StyledMenuItem.styled";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Card_MenuItem() {
	return (
		<Card style={{ width: "100%", position: "relative", padding: "1rem" }}>
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
			<div
				style={{
					position: "absolute",
					bottom: "37px",
					left: "157px",
					zIndex: "10",
					fontSize: "1.1rem",
					color: "rgba(0,0,0,.5)",
				}}
			>
				<AiOutlinePlusCircle style={{ marginRight: ".5rem" }} />
				<AiOutlineMinusCircle />
			</div>
		</Card>
	);
}

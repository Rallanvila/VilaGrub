import { Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { StyledMenuItem } from "../../components/MenuItem/MenuItem";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Card_MenuItem() {
	const [count, setCount] = useState(1);

	console.log(count);
	function upCount() {
		return setCount(count + 1);
	}
	function downCount() {
		return setCount(count <= 0 ? 0 : count - 1);
	}
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
				<h3 style={{ marginLeft: "2rem 1rem 0 " }}>{count}</h3>
				<Link href="#">
					<a style={{ marginLeft: "1rem" }}>Hot Coffee</a>
				</Link>
			</StyledMenuItem>
			<div
				style={{
					display: "flex",
					position: "absolute",
					bottom: "37px",
					left: "157px",
					zIndex: "10",
					fontSize: "1.1rem",
					color: "rgba(0,0,0,.5)",
				}}
			>
				<AiOutlinePlusCircle
					onClick={upCount}
					style={{ marginRight: ".5rem", cursor: "pointer" }}
				/>
				<AiOutlineMinusCircle
					onClick={downCount}
					style={{ cursor: "pointer" }}
				/>
			</div>
		</Card>
	);
}

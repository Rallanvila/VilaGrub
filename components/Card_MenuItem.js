import { Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { StyledMenuItem } from "./MenuItem";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Card_MenuItem({
	item: { image, title, milk, flavors, sweeteners, size, imageUrl, id },
	handleRemove,
	handleAdd,
}) {
	return (
		<Card
			style={{
				width: "100%",
				position: "relative",
				margin: "1rem 0",
				padding: "1rem 1rem 1.5rem",
			}}
		>
			<StyledMenuItem style={{ margin: "0" }}>
				<Image
					className="image"
					src={imageUrl}
					alt="drink"
					width="112"
					height="112"
				/>
				<Link href="#">
					<a style={{ marginLeft: "1rem" }}>{title}</a>
				</Link>
			</StyledMenuItem>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-start",
					flexDirection: "column",
					fontSize: "1.1rem",
					color: "rgba(0,0,0,.5)",
					position: "absolute",
					bottom: "15px",
					left: "142px",
					alignItems: "flex-start",
				}}
			>
				<span
					style={{
						marginBottom: ".5rem",
						textTransform: "capitalize",
						fontSize: ".9rem",
					}}
				>
					{size}, {milk}, {flavors}, {sweeteners}
				</span>
				<div>
					<AiOutlinePlusCircle
						onClick={() => handleAdd(id)}
						style={{ marginRight: ".5rem", cursor: "pointer" }}
					/>
					<AiOutlineMinusCircle
						onClick={() => handleRemove(id)}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</div>
		</Card>
	);
}

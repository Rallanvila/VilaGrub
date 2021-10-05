import { Button } from "./Button";
import { Container } from "./styles/Container.styled";
import { FlexCenter } from "./styles/FlexCenter.styled";
import { Grid } from "./styles/Grid.styled";
import React, { Fragment } from "react";
import duoCardContent from "../data/content-DuoCard";

function DuoCard() {
	return (
		<>
			{duoCardContent.map((c) => {
				<FlexCenter key={c.id} bg={c.background}>
					<h2>{c.image}</h2>
					<h2>{c.title}</h2>
					<p>{c.description}</p>
					<Button border={c.btnBorder}>Order Now</Button>
				</FlexCenter>;
			})}
		</>

		// <Grid>
		// 	<FlexCenter>
		// 		<h2>Img</h2>
		// 		<h2>Order Online</h2>
		// 		<p>
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
		// 			fuga natus repudiandae voluptate beatae aperiam?
		// 		</p>
		// 		<Button border="#212529">Order Now</Button>
		// 	</FlexCenter>
		// 	<FlexCenter>
		// 		<h2>Img</h2>
		// 		<h2>Order Online</h2>
		// 		<p>
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
		// 			fuga natus repudiandae voluptate beatae aperiam?
		// 		</p>
		// 		<Button border="#212529">Order Now</Button>
		// 	</FlexCenter>
		// </Grid>
	);
}

export default DuoCard;

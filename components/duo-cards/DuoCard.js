import { Button } from "../Button";
import { Container } from "../../helpers/Container.styled";
import { FlexCenter } from "../../helpers/FlexCenter.styled";
import { Grid } from "../../helpers/Grid.styled";
import React, { Fragment } from "react";
import duoCardContent from "../../data/content-DuoCard";
import { ImageContainer } from "../../helpers/ImageContainer.styled";
import Image from "next/image";

function DuoCard() {
	return (
		<React.Fragment>
			<Grid>
				{duoCardContent.map((m) => (
					<>
						<FlexCenter
							style={{
								background: "#789494",
								padding: "2rem 1.5rem",
								marginBottom: "1rem",
							}}
						>
							<ImageContainer style={{ height: "400px" }}>
								<Image src={m.image} alt={m.alt} layout="fill" />
							</ImageContainer>
							<h2>{m.title}</h2>
							<p>{m.description}</p>
							<Button border={m.btnBorder} bg={m.background}>
								Order Now
							</Button>
						</FlexCenter>
					</>
				))}
			</Grid>
		</React.Fragment>
	);
}

export default DuoCard;

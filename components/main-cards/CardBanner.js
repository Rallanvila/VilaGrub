import { Grid } from "../../helpers/Grid.styled";
import Image from "next/dist/client/image";
import { ImageContainer } from "../../helpers/ImageContainer.styled";
import { Button } from "../Button";
import bannerContent from "../../data/content-CardBanner";
import React, { Fragment } from "react";

export function CardBanner() {
	return (
		<>
			{bannerContent.map((c) => (
				<React.Fragment key={c.id}>
					<Grid className="card__grid" bg={c.background}>
						<div style={{ padding: "3rem 1rem" }}>
							<h2 className="card__heading" style={c.color}>
								{c.title}
							</h2>
							<p className="card__description" style={c.color}>
								{c.description}
							</p>
							<Button
								style={c.color}
								border={c.btnBorder}
								bg={c.background}
								color={c.btnBorder}
							>
								Order Now
							</Button>
						</div>
						<ImageContainer>
							<Image
								className="card-banner__img"
								src={c.image}
								alt={c.alt}
								layout="fill"
							/>
						</ImageContainer>
					</Grid>
				</React.Fragment>
			))}
		</>
	);
}

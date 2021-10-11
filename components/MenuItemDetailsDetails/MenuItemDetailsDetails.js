import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Grid } from "../../helpers/Grid.styled";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

const Customizations = styled.div`
	padding: 0 2rem;
	p {
		margin-bottom: 3rem;
	}
	input {
		margin: 1rem;
	}
`;
const Nutrition = styled.div`
	padding: 0 3rem;
	p {
		margin-bottom: 3rem;
	}
	input {
		margin: 1rem;
	}
	ul {
		padding: 0;
	}
	li {
		text-decoration: none;
		padding: 0.5rem 0;
		list-style: none;
		border-top: 1px rgba(0, 0, 0, 0.2) solid;
		border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
	}
`;

const NutritionTitle = styled.span`
	font-weight: 600;
	margin-right: 0.5rem;
`;
const NutritionTitleIndent = styled.span`
	padding-left: 2rem;
`;

export function MenuItemDetailsDetails() {
	const [size, setSize] = React.useState("");
	const [milk, setMilk] = React.useState("");
	const [flavors, setFlavors] = React.useState("");

	const handleSize = (event) => {
		setSize(event.target.value);
	};

	const handleMilk = (event) => {
		setMilk(event.target.value);
	};

	const handleFlavors = (event) => {
		setFlavors(event.target.value);
	};
	return (
		<Grid
			style={{ padding: "0 3rem", textAlign: "start", alignItems: "start" }}
		>
			<Customizations>
				<p>
					Espresso shots topped with hot water create a light layer of crema
					culminating in this wonderfully rich cup with depth and nuance. Pro
					Tip: For an additional boost, ask your barista to try this with an
					extra shot.
				</p>
				<FormControl fullWidth>
					<InputLabel id="size">Select Size</InputLabel>
					<Select
						labelId="size"
						id="size"
						value={size}
						label="Size"
						onChange={handleSize}
						style={{ marginBottom: "1rem" }}
					>
						<MenuItem value={10}>Small</MenuItem>
						<MenuItem value={20}>Medium</MenuItem>
						<MenuItem value={30}>Large</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="milk">Select Milk</InputLabel>
					<Select
						labelId="milk"
						id="milk"
						value={milk}
						label="milk"
						onChange={handleMilk}
						style={{ marginBottom: "1rem" }}
					>
						<MenuItem value={"none"}>None</MenuItem>
						<MenuItem value={"lo-fat"}>Lo-fat</MenuItem>
						<MenuItem value={"Skim"}>Skim</MenuItem>
						<MenuItem value={"Almond"}>Almond</MenuItem>
						<MenuItem value={"Coconut"}>Coconut</MenuItem>
						<MenuItem value={"Oot"}>Oat</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="flavors">Select Flavors</InputLabel>
					<Select
						labelId="flavors"
						id="flavors"
						value={flavors}
						label="flavors"
						onChange={handleFlavors}
						style={{ marginBottom: "1rem" }}
					>
						<MenuItem value={"none"}>None</MenuItem>
						<MenuItem value={"lo-fat"}>Lo-fat</MenuItem>
						<MenuItem value={"Skim"}>Skim</MenuItem>
						<MenuItem value={"Almond"}>Almond</MenuItem>
						<MenuItem value={"Coconut"}>Coconut</MenuItem>
						<MenuItem value={"Oot"}>Oat</MenuItem>
					</Select>
				</FormControl>
			</Customizations>
			<Nutrition>
				<h2>Nutritional Information</h2>
				<p>
					Nutrition information is calculated based on our standard recipes.
					Only changing drink size will update this information. Other
					customizations will not.
				</p>
				<ul>
					<li
						style={{
							borderTop: "none",
							borderBottom: "4px solid rgba(0,0,0,.3)",
						}}
					>
						Serving Size 16fl oz
					</li>
					<li style={{ paddingTop: "1.5rem" }}>
						<NutritionTitle>Calories</NutritionTitle> 15g
					</li>
					<li>
						<NutritionTitle>Total Fat</NutritionTitle> 0g
					</li>
					<li>
						<NutritionTitleIndent>Saturated Fat</NutritionTitleIndent> 0g
					</li>
					<li>
						<NutritionTitleIndent>Trans Fat</NutritionTitleIndent> 0g
					</li>
					<li>
						<NutritionTitle>Sodium</NutritionTitle> 0mg
					</li>
					<li>
						<NutritionTitle>Total Carbohydrates</NutritionTitle> 5g
					</li>
					<li>
						<NutritionTitleIndent>Dietary Fiber</NutritionTitleIndent> 0g
					</li>
					<li>
						<NutritionTitleIndent>Sugars</NutritionTitleIndent> 0g
					</li>
					<li>
						<NutritionTitle>Protein</NutritionTitle> 5g
					</li>
				</ul>
			</Nutrition>
		</Grid>
	);
}

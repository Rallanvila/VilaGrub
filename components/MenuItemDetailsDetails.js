import { Grid } from "../helpers/Grid.styled";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";
import { CartContext } from "../lib/context";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export function MenuItemDetailsDetails({
	itemSize,
	addIns,
	itemFlavors,
	itemSweeteners,
	title,
}) {
	const router = useRouter();
	const thisPageId = router.query.id;

	//State Management
	const [size, setSize] = useState("");
	const [milk, setMilk] = useState("");
	const [flavors, setFlavors] = useState("");
	const [sweeteners, setSweeteners] = useState("");
	const { cart, setCart } = useContext(CartContext);

	//Form Management
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.title = title;
		const newCart = [...cart, data];
		setCart(newCart);
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
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl fullWidth>
						<InputLabel id="size">Size</InputLabel>
						<Select
							{...register("size", { required: true })}
							labelId="size"
							id="size"
							value={size}
							label="Size"
							onChange={(e) => setSize(e.target.value)}
							style={{ marginBottom: "1rem" }}
						>
							{itemSize.map((size, index) => (
								<MenuItem key={index} value={size}>
									{size}
								</MenuItem>
							))}
						</Select>
						{errors.size?.type === "required" && "Please select your size"}
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="milk">Milk</InputLabel>
						<Select
							{...register("milk", { required: true })}
							labelId="milk"
							id="milk"
							value={milk}
							label="milk"
							onChange={(e) => setMilk(e.target.value)}
							style={{ marginBottom: "1rem" }}
						>
							{addIns.map((addIn, index) => (
								<MenuItem key={index} value={addIn}>
									{addIn}
								</MenuItem>
							))}
						</Select>
						{errors.milk && "Please select milk"}
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="flavors">Flavors</InputLabel>
						<Select
							{...register("flavors", { required: true })}
							labelId="flavors"
							id="flavors"
							value={flavors}
							label="flavors"
							onChange={(e) => setFlavors(e.target.value)}
							style={{ marginBottom: "1rem" }}
						>
							{itemFlavors.map((flavor, index) => (
								<MenuItem key={index} value={flavor}>
									{flavor}
								</MenuItem>
							))}
						</Select>
						{errors.flavors && "Please select your flavor"}
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id="sweeteners">Sweeteners</InputLabel>
						<Select
							{...register("sweeteners", { required: true })}
							labelId="sweeteners"
							id="sweeteners"
							value={sweeteners}
							label="sweeteners"
							onChange={(e) => setSweeteners(e.target.value)}
							style={{ marginBottom: "1rem" }}
						>
							{itemSweeteners.map((sweetener, index) => (
								<MenuItem key={index} value={sweetener}>
									{sweetener}
								</MenuItem>
							))}
						</Select>
						{errors.sweeteners && "Please select sweeteners"}
					</FormControl>
					<Button
						variant="contained"
						size="large"
						color="success"
						type="submit"
					>
						Add to Order
					</Button>
					{/* <input type="submit" /> */}
				</form>
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

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const Customizations = styled.div`
	padding: 0 2rem;
	p {
		margin-bottom: 3rem;
	}
	input {
		margin: 1rem;
	}
	button {
		margin-top: 2rem;
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

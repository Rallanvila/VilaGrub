import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Grid } from "../../helpers/Grid.styled";
import styled from "styled-components";

const Customizations = styled.form``;

export function MenuItemDetailsDetails() {
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
			</Customizations>
			<div>
				<h2>Nutritional Information</h2>
				<p>
					Espresso shots topped with hot water create a light layer of crema
					culminating in this wonderfully rich cup with depth and nuance. Pro
					Tip: For an additional boost, ask your barista to try this with an
					extra shot.
				</p>
			</div>
		</Grid>
	);
}

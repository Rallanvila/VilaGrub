import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Payment() {
	return (
		<StyledPayment>
			<FormControl>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input
					variant="outlined"
					id="my-input"
					aria-describedby="my-helper-text"
				/>
				<FormHelperText id="my-helper-text">
					We&apos;ll never share your email.
				</FormHelperText>
			</FormControl>
		</StyledPayment>
	);
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const StyledPayment = styled.div`
	position: absolute;
	min-height: 500px;
	bottom: 0;
	right: 0;
	left: 0;
`;

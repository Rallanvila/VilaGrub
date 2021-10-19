import { Button, Card, CardContent, TextField } from "@mui/material";
import { StyledSignInForm } from "./StyledSignInHeader.styled";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function SignInForm() {
	return (
		<Card
			className="card"
			variant="outlined"
			style={{
				maxWidth: "500px",
				minWidth: "350px",
				margin: "2rem auto",
				position: "relative",
			}}
		>
			<StyledSignInForm>
				<CardContent className="card-content">
					<TextField
						className="text-field"
						id="outlined-basic"
						label="Username or email address"
						variant="outlined"
						required
						type="username"
					/>
					<TextField
						className="text-field"
						id="outlined-basic"
						label="Password"
						variant="outlined"
						required
						type="password"
					/>
					<a
						className="forgot"
						onMouseOver={noUnderline}
						onMouseLeave={underline}
					>
						Forgot your username?
					</a>
					<a
						className="forgot"
						onMouseOver={noUnderline}
						onMouseLeave={underline}
					>
						Forgot your password?
					</a>
				</CardContent>
			</StyledSignInForm>
			<Button
				style={{
					position: "absolute",
					bottom: "10%",
					right: "10%",
					borderRadius: "20px",
				}}
				variant="contained"
				size="large"
			>
				Sign In
			</Button>
		</Card>
	);

	function underline(e) {
		e.target.style.textDecoration = "underline";
	}
	function noUnderline(e) {
		e.target.style.textDecoration = "none";
	}
}

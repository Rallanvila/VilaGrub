import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export function LoginCredentials() {
	return (
		<StyledLoginCredentials>
			<Card className="card">
				<CardContent className="card-content">
					<h3>Dont want to enter your email and create a password?</h3>
					<p>
						Here is a dummy login to experience the checkout process, view
						recent orders. If you&apos;d like to see the automated email that
						get&apos;s sent to you after your order, enter an email address and
						password above!{" "}
					</p>
					<div>
						<UserPass>Username:</UserPass>
						<span>User@grubspot.com</span>
					</div>
					<div>
						<UserPass>Password:</UserPass>
						<span>HireAllanVilaN@w!</span>
					</div>
				</CardContent>
			</Card>
		</StyledLoginCredentials>
	);
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const StyledLoginCredentials = styled.div`
	text-align: center;
	h3 {
		color: #1769aa;
		max-width: 60%;
		margin: 0 auto;
		margin-bottom: 1rem;
	}
	p {
		max-width: 95%;
		margin: 0 auto;
		margin-bottom: 1rem;
	}
	span {
		max-width: 80%;
		margin: 0 auto;
		margin-bottom: 0.5rem;
		margin-left: 0.5rem;
	}
	.card {
		background: #4dacf540;
	}
`;

const UserPass = styled.span`
	color: #1769aa;
	display: inline-block;
	font-weight: 700;
`;

import { Button, Link } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../svg/logo.svg";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export function SignInFooter() {
	return (
		<StyledSignInFooter>
			<div className="wrapper">
				<ul className="links">
					<Link href="/">
						<Image src={logo} alt="logo" width={50} height={50} />
					</Link>
					<Link className="link" href="/">
						Home
					</Link>
					<Link className="link" href="/menu">
						Menu
					</Link>
					<Button
						style={{ borderRadius: "20px", fontWeight: "600" }}
						variant="outlined"
					>
						Hire Me
					</Button>
				</ul>
			</div>
		</StyledSignInFooter>
	);
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const StyledSignInFooter = styled.footer`
	width: 100%;
	border-top: rgba(0, 0, 0, 0.1) 1px solid;
	.wrapper {
		max-width: 500px;
		margin: 0 auto;
		padding: 2rem 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.links {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.link,
		a {
			color: #1976d2;
			margin: 1rem 1rem;
			text-decoration: none;
			font-weight: 500;
			cursor: pointer;
		}
	}
`;

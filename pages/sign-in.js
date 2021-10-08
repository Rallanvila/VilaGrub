import Head from "next/head";
import "normalize.css";
import SignInHeader from "../components/SignInHeader/SignInHeader";
import SignInForm from "../components/Sign-In-Form/SignInForm";
import { LoginCredentials } from "../components/LoginCredentials/LoginCredentials";
import { SignInWrapper } from "../helpers/SignInWrapper.styled";
import { SignInFooter } from "../components/SignInFooter/SignInFooter";

export const theme = {
	colors: {
		brandBlue: "#294442",
		brandBrown: "#c69250",
		brandGreen: "#89a525",
		brandGrey: "#789494",
		dark: "#212529",
	},
};

export default function Menu() {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot | Sign In</title>
			</Head>
			<SignInHeader />
			<SignInWrapper>
				<SignInForm />
				<LoginCredentials />
			</SignInWrapper>
			<SignInFooter />
			<p
				style={{
					width: "fit-content",
					margin: "0 auto",
					fontWeight: "500",
					fontSize: ".9rem",
					paddingBottom: "3rem",
				}}
			>
				&copy; 2021 Vila's Grubspot
			</p>
		</>
	);
}

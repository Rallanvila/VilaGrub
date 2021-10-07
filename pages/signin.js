import Head from "next/head";
import "normalize.css";

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
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css"
				/>
			</Head>
			<SignInHeader />
			{/* <SignInForm/>
            <SignInFooter/> */}
		</>
	);
}

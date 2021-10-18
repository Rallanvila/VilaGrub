import Head from "next/head";
import "normalize.css";
import MainFeature from "../components/MainFeature/MainFeature";
import Hero from "../components/Hero/Hero";
import SecondaryFeature from "../components/SecondaryFeature/SecondaryFeature";

// export const theme = {
// 	colors: {
// 		brandBlue: "#294442",
// 		brandBrown: "#c69250",
// 		brandGreen: "#89a525",
// 		brandGrey: "#789494",
// 		dark: "#212529",
// 	},
// };

export default function Home() {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot</title>
			</Head>
			<Hero />
			<MainFeature />
			<SecondaryFeature />
		</>
	);
}

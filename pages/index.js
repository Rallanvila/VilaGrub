import Head from "next/head";
import "normalize.css";
import Header from "../components/header/Header";
import MainBanner from "../components/hero/MainBanner";
import { CardBanner } from "../components/main-cards/CardBanner";
import DuoCard from "../components/duo-cards/DuoCard";
import Footer from "../components/footer/Footer";

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

			<Header />
			<MainBanner />
			<CardBanner />
			<DuoCard />
			<Footer />
		</>
	);
}

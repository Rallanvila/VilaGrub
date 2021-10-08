import Head from "next/head";
import "normalize.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { MenuGrid } from "../helpers/MenuGrid.styled";
import SideMenu from "../components/sidemenu/sidemenu";
import MainMenu from "../components/mainmenu/MainMenu";

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
				<title>Vila's Grub Spot | Menu</title>
			</Head>
			<Header />
			<MenuGrid>
				<SideMenu />
				<div>
					<MainMenu />
				</div>
			</MenuGrid>

			<Footer />
		</>
	);
}

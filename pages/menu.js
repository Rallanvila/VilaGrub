import Head from "next/head";
import "normalize.css";
import { MenuGrid } from "../helpers/MenuGrid.styled";
import SideMenu from "../components/SideMenu/SideMenu";
import MainMenu from "../components/MainMenu/MainMenu";

// export const theme = {
// 	colors: {
// 		brandBlue: "#294442",
// 		brandBrown: "#c69250",
// 		brandGreen: "#89a525",
// 		brandGrey: "#789494",
// 		dark: "#212529",
// 	},
// };

export default function Menu() {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot | Menu</title>
			</Head>
			<MenuGrid>
				<SideMenu />
				<div>
					<MainMenu />
				</div>
			</MenuGrid>
		</>
	);
}

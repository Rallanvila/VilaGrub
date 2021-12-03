import Head from "next/head";
import "normalize.css";
import SideMenu from "../../components/sidemenu";
import { MenuGrid } from "../../helpers/MenuGrid.styled";
import MainMenu from "../../components/MainMenu";

// -------------------------------------------
// **  PAGE
// -------------------------------------------

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

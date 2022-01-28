import Head from "next/head";
import "normalize.css";
import SideMenu from "../../components/SideMenu";
import { MenuGrid } from "../../helpers/MenuGrid.styled";
import MainMenu from "../../components/MainMenu";

// -------------------------------------------
// **  PAGE
// -------------------------------------------

export default function Menu() {
	return (
		<>
			<Head>
				<title>Vila&apos;s Grub Spot | Menu</title>
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

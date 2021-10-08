import Head from "next/head";
import { StyledMenuHeader } from "../components/MenuHeader/StyledMenuHeader.styled";
import { MenuSection } from "../helpers/MenuSection.styled";
import { MenuSectionGrid } from "../helpers/MenuSectionGrid.styled";
import MenuItem from "../components/MenuItem/MenuItem";
import { hotCoffees } from "../data/hot-coffees";
import Header from "../components/header/Header";
import { MenuGrid } from "../helpers/MenuGrid.styled";
import SideMenu from "../components/sidemenu/sidemenu";
import Footer from "../components/footer/Footer";

function HotCoffees() {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot | Hot Coffees</title>
			</Head>
			<Header />
			<MenuGrid>
				<SideMenu />
				<div>
					<MenuSection
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							height: "60%",
							width: "100%",
						}}
					>
						<StyledMenuHeader style={{ fontSize: "2rem" }}>
							Hot Coffees
						</StyledMenuHeader>
						<MenuSectionGrid>
							{hotCoffees.map((item, index) => (
								<MenuItem key={index} item={item} />
							))}
						</MenuSectionGrid>
					</MenuSection>
				</div>
			</MenuGrid>
			<Footer />
		</>
	);
}

export default HotCoffees;

import Head from "next/head";
import { StyledMenuHeader } from "../../../../components/MenuHeader/StyledMenuHeader.styled";
import { MenuSection } from "../../../../helpers/MenuSection.styled";
import { MenuSectionGrid } from "../../../../helpers/MenuSectionGrid.styled";
import MenuItem from "../../../../components/MenuItem/MenuItem";
import { MenuGrid } from "../../../../helpers/MenuGrid.styled";
import SideMenu from "../../../../components/sidemenu/sidemenu";
import { connectToDatabase } from "../../../../util/mongodb";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function HotCoffees({ drinks }) {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot | Hot Coffees</title>
			</Head>
			<MenuGrid>
				<SideMenu />
				<div>
					<MenuSection>
						<StyledMenuHeader style={{ marginBottom: "2rem" }}>
							Hot Coffees
						</StyledMenuHeader>
						<MenuSectionGrid>
							{drinks.map((item, index) => (
								<MenuItem key={index} item={item} />
							))}
							{/* {hotCoffees.map((item, index) => (
								<MenuItem key={index} item={item} />
							))} */}
						</MenuSectionGrid>
					</MenuSection>
				</div>
			</MenuGrid>
		</>
	);
}

// -------------------------------------------
// **  PULL PROPS FROM DB
// -------------------------------------------

export async function getStaticProps() {
	const { db } = await connectToDatabase();

	const drinks = await db
		.collection("menu")
		.find({
			category: "hot-coffee",
		})
		.toArray();

	// const hotCoffees = JSON.parse(JSON.stringify(drinks))

	return {
		props: {
			drinks: JSON.parse(JSON.stringify(drinks)),
		},
	};
}

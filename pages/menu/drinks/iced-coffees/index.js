import Head from "next/head";
import { StyledMenuHeader } from "../../../../components/StyledMenuHeader.styled";
import { MenuSection } from "../../../../helpers/MenuSection.styled";
import { MenuSectionGrid } from "../../../../helpers/MenuSectionGrid.styled";
import MenuItem from "../../../../components/MenuItem";
import { MenuGrid } from "../../../../helpers/MenuGrid.styled";
import SideMenu from "../../../../components/SideMenu";
import clientPromise from "../../../../lib/mongodb";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function HotCoffees({ drinks }) {
	return (
		<>
			<Head>
				<title>Vila&apos;s Grub Spot | Iced Coffees</title>
			</Head>
			<MenuGrid>
				<SideMenu />
				<div>
					<MenuSection>
						<StyledMenuHeader style={{ marginBottom: "2rem" }}>
							Iced Coffees
						</StyledMenuHeader>
						<MenuSectionGrid>
							{/* Drink Categories */}
							{drinks.map((item, index) => (
								<MenuItem key={index} item={item} />
							))}
						</MenuSectionGrid>
					</MenuSection>
				</div>
			</MenuGrid>
		</>
	);
}

// -------------------------------------------
// **  DB CALL
// -------------------------------------------

export async function getStaticProps() {
	// Creates connection to DB in cloud
	const client = await clientPromise;
	const db = await client.db();
	// Query the DB with what you want to pull
	const drinks = await db
		.collection("menu")
		.find({
			category: "iced-coffee",
		})
		.toArray();
	// Return the data in JSON format to map/destructure.
	return {
		props: {
			drinks: JSON.parse(JSON.stringify(drinks)),
		},
	};
}

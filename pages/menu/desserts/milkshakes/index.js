import Head from "next/head";
import { StyledMenuHeader } from "../../../../components/MenuHeader/StyledMenuHeader.styled";
import { MenuSection } from "../../../../helpers/MenuSection.styled";
import { MenuSectionGrid } from "../../../../helpers/MenuSectionGrid.styled";
import MenuItem from "../../../../components/MenuItem/MenuItem";
import { MenuGrid } from "../../../../helpers/MenuGrid.styled";
import SideMenu from "../../../../components/sidemenu/sidemenu";
import clientPromise from "../../../../lib/mongodb";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function HotCoffees({ milkshakes }) {
	return (
		<>
			<Head>
				<title>Vila's Grub Spot | Milkshakes</title>
			</Head>
			<MenuGrid>
				<SideMenu />
				<div>
					<MenuSection>
						<StyledMenuHeader style={{ marginBottom: "2rem" }}>
							Milkshakes
						</StyledMenuHeader>
						<MenuSectionGrid>
							{milkshakes.map((item, index) => (
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
	const milkshakes = await db
		.collection("menu")
		.find({
			category: "milk-shake",
		})
		.toArray();
	// Return the data in JSON format to map/destructure.
	return {
		props: {
			milkshakes: JSON.parse(JSON.stringify(milkshakes)),
		},
	};
}

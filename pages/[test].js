import { useRouter } from "next/dist/client/router";
import clientPromise from "../lib/mongodb";

// -------------------------------------------
// **  SETTING PATH
// -------------------------------------------

export async function getStaticPaths() {
	const client = await clientPromise;
	const menuItemId = await client.db();

	const paths = menuItemId.map((id) => console.log({ id: menuItemId._id }));
	return {
		paths: [
			{ params: { id: menuItemId._id } }, // See the "paths" section below
		],
		fallback: false,
	};
}

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Test({ itemId }) {
	const router = useRouter();
	const { test } = router.query;
	return (
		<h1 style={{ margin: "2rem 0", padding: "0 2rem" }}>
			What you entered in the route will be displayed here:
			<span
				style={{
					padding: "1rem",
					marginLeft: "1rem",
					border: "2px solid red",
					borderRadius: "5px",
				}}
			>
				{test}
			</span>
		</h1>
	);
}

// -------------------------------------------
// **  DB CALL
// -------------------------------------------

export async function getStaticProps({ params }) {
	const client = await clientPromise;
	const db = await client.db();

	const itemId = await db.collection("menu").find().toArray();

	return {
		props: { itemId: JSON.parse(JSON.stringify(itemId)) },
	};
}

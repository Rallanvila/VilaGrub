import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Cart } from "../../components/Cart/Cart";
import { MenuItemDetailsBanner } from "../../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../../components/MenuItemDetailsDetails/MenuItemDetailsDetails";
import clientPromise from "../../lib/mongodb";


// -------------------------------------------
// **  SET STATIC PATH IN ORDER TO PULL FROM DB
// -------------------------------------------


export async function getStaticPaths() {
	const res = await clientPromise;
	const db = await res.db();

	const paths = db.collection("menu").find().toArray();

	return {
		paths,
		fallback: false,
	};
}


// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default const MenuItemId = ({ item }) => {
    const router = useRouter();
	const { id } = router.query;
	return (
        <>
			<Head>
				<title>Menu | {id}</title>
			</Head>
			<MenuItemDetailsBanner />
			<h1>{id + item.title}</h1>
			<MenuItemDetailsDetails />
			<Cart />
		</>
	);
};

// -------------------------------------------
// **  DATABASE CALL
// -------------------------------------------

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https:localhost:3000/api/menu/all-items/${id}`);
    const data = await res.json();

    return {
        props: { item: data },
    };
}
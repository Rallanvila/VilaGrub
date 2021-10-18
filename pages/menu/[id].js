import { useRouter } from "next/dist/client/router";
import { Cart } from "../../components/Cart/Cart";
import { MenuItemDetailsBanner } from "../../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../../components/MenuItemDetailsDetails/MenuItemDetailsDetails";

const MenuItemId = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<MenuItemDetailsBanner />
			<MenuItemDetailsDetails />
			<Cart />
		</>
	);
};

export default MenuItemId;

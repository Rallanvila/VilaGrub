import { Cart } from "../components/Cart/Cart";
import { MenuItemDetailsBanner } from "../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../components/MenuItemDetailsDetails/MenuItemDetailsDetails";

export default function MenuItemDetails() {
	return (
		<div>
			<MenuItemDetailsBanner />
			<MenuItemDetailsDetails />
			<Cart />
		</div>
	);
}

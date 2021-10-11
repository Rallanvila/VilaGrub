import { Cart } from "../components/Cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MenuItemDetailsBanner } from "../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../components/MenuItemDetailsDetails/MenuItemDetailsDetails";

export default function MenuItemDetails() {
	return (
		<div>
			<Header />
			<MenuItemDetailsBanner />
			<MenuItemDetailsDetails />
			<Footer />
			<Cart />
		</div>
	);
}

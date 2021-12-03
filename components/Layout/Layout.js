import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { Cart } from "../Cart";
import { useContext } from "react";
import { CartContext } from "../../lib/context";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Cart />
			<Footer />
		</>
	);
};
export default Layout;

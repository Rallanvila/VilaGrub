import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { Cart } from "../Cart";

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

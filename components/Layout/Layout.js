import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};
export default Layout;

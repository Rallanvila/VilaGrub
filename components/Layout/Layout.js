import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";

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

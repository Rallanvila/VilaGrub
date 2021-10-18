import "../styles/globals.css";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;

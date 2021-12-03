import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Auth0Provider } from "@auth0/auth0-react";
import { useState, useMemo, useEffect } from "react";
import { CartContext } from "../lib/context";
import { useLocalStorage } from "../lib/useLocalStorage";

export default function MyApp({ Component, pageProps }) {
	const [cart, setCart] = useState(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("cart");
			const savedValue = JSON.parse(saved);
			return savedValue || "";
		}
	});
	const value = useMemo(() => ({ cart, setCart }), [cart]);

	return (
		<Auth0Provider
			domain="dev-phzsoqad.us.auth0.com"
			clientId="4FgEqhxnRFSko0kQX1SP7DiYhlrfQF02"
			redirectUri="http://localhost:3000"
		>
			<CartContext.Provider value={value}>
				<Layout>
					<Component {...pageProps} />;
				</Layout>
			</CartContext.Provider>
		</Auth0Provider>
	);
}

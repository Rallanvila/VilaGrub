import Head from "next/head";
import Image from "next/image";
import "normalize.css";
import styles from "../styles/Home.module.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { ThemProvider } from "styled-components";
import MainBanner from "../components/MainBanner";

export const theme = {
	colors: {
		brandBlue: "#294442",
		brandBrown: "#c69250",
		brandGreen: "#89a525",
		brandGrey: "#789494",
		dark: "#212529",
	},
};

export default function Home() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css"
			/>
			<Header />
			<MainBanner />
		</>
	);
}

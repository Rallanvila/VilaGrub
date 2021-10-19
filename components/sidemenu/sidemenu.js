import { dessertCategories } from "../../data/dessertsCategories";
import { drinkCategories } from "../../data/drinkCategories";
import { foodCategories } from "../../data/foodCategories";
import { SideMenuHeader } from "../../helpers/SideMenuHeader.styled";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function SideMenu() {
	return (
		<StyledSideMenu>
			<SideMenuHeader>Drinks</SideMenuHeader>
			{drinkCategories.map((item, index) => (
				<a href={item.page} key={index}>
					{item.label}
				</a>
			))}
			<SideMenuHeader>Food</SideMenuHeader>
			{foodCategories.map((item, index) => (
				<a href="#" key={index}>
					{item.label}
				</a>
			))}
			<SideMenuHeader>Deserts</SideMenuHeader>
			{dessertCategories.map((item, index) => (
				<a href="#" key={index}>
					{item.label}
				</a>
			))}
		</StyledSideMenu>
	);
}
// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const StyledSideMenu = styled.nav`
	display: none;
	@media screen and (min-width: 1008px) {
		display: block;
		a {
			display: block;
			font-weight: 600;
			opacity: 0.7;
			cursor: pointer;
			margin-bottom: 2rem;
		}
	}
`;

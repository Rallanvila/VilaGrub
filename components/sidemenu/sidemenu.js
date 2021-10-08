import { desserts } from "../../data/desserts";
import { drinks } from "../../data/drinks";
import { food } from "../../data/food";
import { SideMenuHeader } from "../../helpers/SideMenuHeader.styled";
import { StyledSideMenu } from "./StyledSideMenu.styled";

function SideMenu() {
	return (
		<StyledSideMenu>
			<SideMenuHeader>Drinks</SideMenuHeader>
			{drinks.map((item, index) => (
				<a href="#" key={index}>
					{item.label}
				</a>
			))}
			<SideMenuHeader>Food</SideMenuHeader>
			{food.map((item, index) => (
				<a href="#" key={index}>
					{item.label}
				</a>
			))}
			<SideMenuHeader>Deserts</SideMenuHeader>
			{desserts.map((item, index) => (
				<a href="#" key={index}>
					{item.label}
				</a>
			))}
		</StyledSideMenu>
	);
}

export default SideMenu;

import MenuItem from "../MenuItem/MenuItem";
import { drinks } from "../../data/drinks";
import { StyledMenuHeader } from "../MenuHeader/StyledMenuHeader.styled";
import { MenuSection } from "../../helpers/MenuSection.styled";
import { food } from "../../data/food";
import { desserts } from "../../data/desserts";
import { MenuSectionGrid } from "../../helpers/MenuSectionGrid.styled";

function MainMenu() {
	return (
		<>
			<MenuSection>
				<StyledMenuHeader>Drinks</StyledMenuHeader>
				<MenuSectionGrid>
					{drinks.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
			<MenuSection>
				<StyledMenuHeader>Food</StyledMenuHeader>
				<MenuSectionGrid>
					{food.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
			<MenuSection>
				<StyledMenuHeader>Desserts</StyledMenuHeader>
				<MenuSectionGrid>
					{desserts.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
		</>
	);
}

export default MainMenu;

import MenuItem from "../MenuItem/MenuItem";
import { drinkCategories } from "../../data/drinkCategories";
import { StyledMenuHeader } from "../MenuHeader/StyledMenuHeader.styled";
import { MenuSection } from "../../helpers/MenuSection.styled";
import { foodCategories } from "../../data/foodCategories";
import { dessertCategories } from "../../data/dessertsCategories";
import { MenuSectionGrid } from "../../helpers/MenuSectionGrid.styled";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function MainMenu() {
	return (
		<>
			<MenuSection>
				<StyledMenuHeader>Drinks</StyledMenuHeader>
				<MenuSectionGrid>
					{drinkCategories.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
			<MenuSection>
				<StyledMenuHeader>Food</StyledMenuHeader>
				<MenuSectionGrid>
					{foodCategories.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
			<MenuSection>
				<StyledMenuHeader>Desserts</StyledMenuHeader>
				<MenuSectionGrid>
					{dessertCategories.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuSectionGrid>
			</MenuSection>
		</>
	);
}

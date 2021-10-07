import Collapsible from "../collapsible/Collapsible";
import { StyledCollapsible } from "../collapsible/StyledCollapsible.styled";
import { FooterStyled } from "./Footer.styled";
import FooterSocial from "./FooterSocial";
import { data } from "../collapsible/data-collapsible";

function Footer() {
	return (
		<FooterStyled>
			<StyledCollapsible>
				{data.map((item, index) => (
					<Collapsible key={index} item={item} />
				))}
			</StyledCollapsible>
			<FooterSocial />
			<h2 style={{ fontSize: "1.2rem", marginBottom: "1.7rem" }}>
				Privacy Policy
			</h2>
			<h2 style={{ fontSize: "1.2rem", marginBottom: "1.7rem" }}>
				Terms of Use
			</h2>
			<h2 style={{ fontSize: "1.2rem", marginBottom: "1.7rem" }}>Hire me!</h2>
		</FooterStyled>
	);

	function toggleCollapsible() {
		// const collapsible = document.querySelectorAll(".collapsible");
		const collapsible = document.querySelectorAll(".collapsible");

		collapsible.classList.contains("collapsible--expanded")
			? collapsible.classList.remove("collapsible--expanded")
			: collapsible.classList.add("collapsible--expanded");
	}

	// function handleClick() {
	// 	const collapsibleContent = document.querySelectorAll(".collapsible");

	// 	collapsibleContent.forEach((c) =>
	// 		c.addEventListener("click", function () {
	// 			this.classList.contains("collapsible--expanded")
	// 				? this.classList.remove("collapsible--expanded")
	// 				: this.classList.add("collapsible--expanded");
	// 		}),
	// 	);
	// }
}

export default Footer;

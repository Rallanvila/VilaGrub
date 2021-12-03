import Collapsible from "./collapsible/Collapsible";
import { StyledCollapsible } from "./collapsible/StyledCollapsible.styled";
import FooterSocial from "./FooterSocial";
import { data } from "./collapsible/data-collapsible";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------
export default function Footer() {
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
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const FooterStyled = styled.footer`
	width: 100%;
	padding: 1rem;
	max-width: 1320px;
	margin: 0 auto;
	h2 {
		font-weight: 600;
		cursor: pointer;
	}
`;

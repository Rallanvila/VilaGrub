import { Container } from "../../helpers/Container.styled";
import { FlexCenter } from "../../helpers/FlexCenter.styled";

function MainBanner() {
	return (
		<Container bg="#294442" color="white">
			<FlexCenter>
				<h1 style={{ paddingTop: "1rem" }}>Welcome To Vila's Grub Spot</h1>
				<h2 style={{ fontWeight: "600", paddingBottom: "1rem" }}>
					Where grubbing is a pleasure!
				</h2>
			</FlexCenter>
		</Container>
	);
}

export default MainBanner;

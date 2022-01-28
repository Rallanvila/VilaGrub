import { Container } from "../helpers/Container.styled";
import { FlexCenter } from "../helpers/FlexCenter.styled";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function Hero() {
	return (
		<Container bg="#294442" color="white">
			<FlexCenter>
				<h1 style={{ paddingTop: "1rem" }}>Welcome To Vila&apos;s Grub Spot</h1>
				<h2 style={{ fontWeight: "600", paddingBottom: "1rem" }}>
					Where grubbing is a pleasure!
				</h2>
			</FlexCenter>
		</Container>
	);
}

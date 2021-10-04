import { Container } from "./styles/Container.styled";
import { Grid } from "./styles/Grid.styled";
import Image from "next/dist/client/image";
import { ImageContainer } from "./styles/ImageContainer.styled";

export function CardBanner() {
	return (
		<>
			<Grid>
				<div className="flex-center main-feature__details">
					<h2 className="card__heading">Hungry Yet??</h2>
					<h3 className="card__description">
						Habenero FlameBurger: are you a spice lord? Heat up your mouth with
						the 100% angus beef with Ghost Dusted Fries
					</h3>
					<a href="#" className="btn btn-clear">
						Order now
					</a>
				</div>

				{/* <Image
						src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
						alt="hamburger"
						layout="fill"
					/> */}
				<div>
					<h1>Yo</h1>
				</div>
			</Grid>
		</>
	);
}

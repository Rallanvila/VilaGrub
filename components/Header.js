import "styled-components";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Header.styled";
import { SpaceBetween } from "./styles/SpaceBetween.styled";
import { FlexCenter } from "./styles/FlexCenter.styled";
import Image from "next/image";
import logo from "../svg/logo.svg";
import { FindStore, FindStoreStyled } from "./FindStore.styled";
import { Button } from "./Button";

export default function Header() {
	return (
		<>
			<Nav>
				<Container>
					<SpaceBetween>
						<FlexCenter>
							<div className="logo">
								<Image src={logo} alt="logo" width={50} height={50} />
							</div>
							<a href="/svg" className="nav__link">
								Menu
							</a>
							<a href="/svg" className="nav__link">
								Rewards
							</a>
							<a href="/svg" className="nav__link">
								Gift Cards
							</a>
						</FlexCenter>
						<FlexCenter>
							<FindStoreStyled>
								<FindStore />
								{/* <div className="navbar__find-store"> */}
								{/* <i
									className="fas fa-map-marker-alt"
									style={{ fontSize: "1.5rem" }}
								></i> */}
								{/* <span className="title">Find a store</span> */}
								{/* </div> */}
							</FindStoreStyled>
							<Button>Sign In</Button>
							<Button>Join Now</Button>
						</FlexCenter>
					</SpaceBetween>
				</Container>
			</Nav>
		</>
	);
}

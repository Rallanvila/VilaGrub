import "styled-components";
import { Container } from "../../helpers/Container.styled";
import { Nav } from "./NavBar.styled";
import { SpaceBetween } from "../../helpers/SpaceBetween.styled";
import Image from "next/image";
import logo from "../../svg/logo.svg";
import { Button } from "../Button";
import Link from "next/link";
import { FindStoreStyled } from "../FindStore.styled";
import { MdLocationOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { UserContext } from "../../lib/context";
import { useContext } from "react";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function NavBar() {
	const { user, username } = useContext(UserContext);

	return (
		<>
			<Nav>
				<Container>
					<SpaceBetween>
						<div className="nav__left">
							<Link href="/" passHref>
								<div className="logo" style={{ cursor: "pointer" }}>
									<Image src={logo} alt="logo" width={50} height={50} />
								</div>
							</Link>
							<Link href="/menu">
								<a className="nav__link">Menu</a>
							</Link>
							<a href="/svg" className="nav__link">
								Rewards
							</a>
							<a href="/svg" className="nav__link">
								Gift Cards
							</a>
						</div>

						<div className="nav__right">
							<FaBars
								id="navMenuBars"
								onClick={toggleMenu}
								style={{ fontSize: "1.5rem", cursor: "pointer" }}
								className="far fa-bars"
							/>
							<i className="fas fa-map-marker-alt"></i>
							<MdLocationOn className="nav__btn" />
							<span className="title">Find a store</span>
							<Link href="/sign-in" passHref>
								<Button className="nav__btn" border="#212529">
									Sign In
								</Button>
							</Link>
							<Button className="nav__btn" bg="#212529" color="#fff">
								Join Now
							</Button>
						</div>
					</SpaceBetween>
				</Container>
			</Nav>

			<Container>
				<div className="navbar__expanded">
					<Link href="/menu" passHref>
						<a className="navbar__item">Menu</a>
					</Link>
					<a href="#" className="navbar__item">
						Rewards
					</a>
					<a href="#" className="navbar__item">
						Gift Cards
					</a>
					<div className="navbar__account">
						<Button style={{ marginRight: "1rem" }} border="#212529">
							Sign In
						</Button>
						<Button bg="#212529" color="#fff">
							Join Now
						</Button>
						<FindStoreStyled>
							<MdLocationOn
								className="fas fa-map-marker-alt"
								style={{ fontSize: "1.5rem" }}
							/>
							<span className="title">Find a store</span>
						</FindStoreStyled>
					</div>
				</div>
			</Container>
		</>
	);

	function toggleMenu() {
		const navDropDown = document.querySelectorAll(".navbar__expanded");
		navDropDown.forEach((n) =>
			n.classList.contains("active")
				? n.classList.remove("active")
				: n.classList.add("active"),
		);
	}
}

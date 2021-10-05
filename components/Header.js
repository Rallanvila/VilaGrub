import "styled-components";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Header.styled";
import { SpaceBetween } from "./styles/SpaceBetween.styled";
import Image from "next/image";
import logo from "../svg/logo.svg";
import { Button } from "./Button";

export default function Header() {
	return (
		<>
			<Nav>
				<Container>
					<SpaceBetween>
						<div className="nav__left">
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
						</div>

						<div className="nav__right">
							<i
								id="navMenuBars"
								onClick={toggleMenu}
								style={{ fontSize: "1.5rem", cursor: "pointer" }}
								className="far fa-bars"
							></i>
							<i className="fas fa-map-marker-alt"></i>
							<span className="title">Find a store</span>
							<Button className="nav__btn" border="#212529">
								Sign In
							</Button>
							<Button className="nav__btn" bg="#212529" color="#fff">
								Join Now
							</Button>
						</div>
					</SpaceBetween>
				</Container>
			</Nav>

			<Container>
				<div className="navbar__expanded">
					<a href="#" className="navbar__item">
						Menu
					</a>
					<a href="#" className="navbar__item">
						Rewards
					</a>
					<a href="#" className="navbar__item">
						Gift Cards
					</a>
					<div className="navbar__account">
						<Button className="nav__btn" border="#212529">
							Sign In
						</Button>
						<Button className="nav__btn" bg="#212529" color="#fff">
							Join Now
						</Button>
						<div className="navbar__find-store">
							<i
								className="fas fa-map-marker-alt"
								style={{ fontSize: "1.5rem" }}
							></i>
							<span className="title">Find a store</span>
						</div>
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

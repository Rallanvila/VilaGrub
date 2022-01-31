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
// import { UserContext } from "../../lib/context";
// import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function NavBar() {
	// const { user, username } = useContext(UserContext);
	const {
		loginWithRedirect,
		user,
		isAuthenticated,
		isLoading,
		logout,
	} = useAuth0();

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

							{!isAuthenticated ? (
								<Button
									onClick={() => loginWithRedirect()}
									className="nav__btn"
									border="#212529"
								>
									Sign In
								</Button>
							) : (
								<Button
									onClick={() => loginWithRedirect()}
									className="nav__btn"
									border="#212529"
								>
									👋 {user.given_name}
								</Button>
							)}
							{!isAuthenticated ? (
								<Button className="nav__btn" bg="#212529" color="#fff">
									Join Now
								</Button>
							) : (
								<Button
									onClick={() => logout({ returnTo: window.location.origin })}
									className="nav__btn"
									bg="#212529"
									color="#fff"
								>
									Log Out
								</Button>
							)}
						</div>
					</SpaceBetween>
				</Container>
			</Nav>
			<NavbarExpanded className="navbar__expanded">
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
					<Button
						onClick={() => loginWithRedirect()}
						style={{ marginRight: "1rem" }}
						border="#212529"
					>
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
			</NavbarExpanded>
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

const NavbarExpanded = styled.div`
	position: absolute;
	opacity: 0;
	width: 100%;
	top: 85px;
	right: 0;
	transform: translateY(-200%);
	transition: opacity 0.1s, transform 0.5s;
	background: #fff;
	z-index: 50;
	overflow-x: hidden;
	z-index: 100;
	padding: 1rem;
	&.active {
		opacity: 1;
		transform: translateY(0);
	}
	.nav__find-store {
		margin-top: 2rem;
	}
	.navbar__item {
		display: block;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: #000;
		cursor: pointer;
		&:hover {
			font-weight: 500;
		}
	}
	.navbar__account {
		border-top: rgba(214, 211, 214, 0.933) 1px solid;
		padding-top: 2rem;
		.nav__btn {
			margin-right: 1rem;
		}
		.navbar__find-store {
			display: flex;
			align-items: center;
			transition: color 0.15s;
			&:hover {
				color: $color-primary;
			}
			.fas {
				margin-right: 1rem;
				cursor: pointer;
			}
			.title {
				font-weight: 600;
				cursor: pointer;
				font-size: 1.1rem;
			}
		}
	}
	@media screen and (min-width: 780px) {
		display: none;
		.navbar__expanded {
			padding: 1rem 50px;
			display: none;
		}
	}
`;

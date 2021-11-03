import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../helpers/Container.styled";
import Coffee from "../../public/coffee.webp";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export function MenuItemDetailsBanner({ title, img, alt }) {
	return (
		<ItemDetailsBanner>
			<Container display="flex" align="center" justify="space-evenly">
				<Image src={img} width={300} height={300} alt={alt} />
				{/* <Image src={img} width={300} height={300} alt={alt} /> */}
				<div>
					<h1>{title}</h1>
					<span>15 Calories</span>
				</div>
			</Container>
		</ItemDetailsBanner>
	);
}
// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

const ItemDetailsBanner = styled.header`
	width: 100%;
	margin: 0 auto 3rem;
	background: #294442;
	padding: 3rem 2rem;
	h1 {
		color: white;
	}
	img {
		object-position: cover;
		object-position: center;
	}
	span {
		color: white;
		opacity: 0.7;
		font-size: 1.3rem;
	}
`;

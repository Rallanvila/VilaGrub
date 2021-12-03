import { Link } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function MenuItem({ item: { imageUrl, alt, label, page } }) {
	// console.log("page: ", page);
	return (
		<StyledMenuItem>
			<Image
				className="image"
				src={imageUrl}
				alt={alt}
				width="112"
				height="112"
			/>
			<Link href={page}>{label}</Link>
		</StyledMenuItem>
	);
}

// -------------------------------------------
// **  STYLED-COMPONENT
// -------------------------------------------

export const StyledMenuItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	cursor: pointer;
	.image {
		border-radius: 50%;
		object-position: center;
		object-fit: cover;
		width: 75px;
		height: 75px;
	}
	a {
		margin-left: 2rem;
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		color: #212529;
		text-transform: capitalize;
		cursor: pointer;
	}
	@media screen and (min-width: 1000px) {
		.image {
			width: 112px;
			height: 112px;
		}
		a {
			font-size: 1.1rem;
		}
	}
`;

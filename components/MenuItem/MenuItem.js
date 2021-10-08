import { Link } from "@mui/material";
import Image from "next/image";
import { StyledMenuItem } from "./StyledMenuItem.styled";

function MenuItem({ item: { image, alt, label, page } }) {
	return (
		<StyledMenuItem>
			<Image className="image" src={image} alt={alt} width="112" height="112" />
			<Link href={page}>{label}</Link>
		</StyledMenuItem>
	);
}

export default MenuItem;

import Image from "next/image";
import { StyledMenuItem } from "./StyledMenuItem.styled";

function MenuItem({ item: { image, alt, label } }) {
	return (
		<StyledMenuItem>
			<Image className="image" src={image} alt={alt} width="112" height="112" />
			<a href="#">{label}</a>
		</StyledMenuItem>
	);
}

export default MenuItem;

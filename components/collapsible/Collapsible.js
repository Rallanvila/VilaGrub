import { StyledCollapsible } from "./StyledCollapsible.styled";
import { useState } from "react";

export default function Collapsible({
	item: { title, section1, section2, section3 },
}) {
	const [clicked, setClicked] = useState(false);

	function toggle() {
		if (clicked === false) {
			return setClicked(true);
		} else return setClicked(false);
	}

	return (
		<div>
			<StyledCollapsible>
				<header>
					<h2>{title}</h2>
					<i
						onClick={toggle}
						className={clicked ? "far fa-chevron-down" : "far fa-chevron-right"}
					></i>
				</header>
				{clicked ? (
					<>
						<a
							href="#"
							onMouseOver={increaseWeight}
							onMouseLeave={decreaseWeight}
						>
							{section1}
						</a>
						<a
							href="#"
							onMouseOver={increaseWeight}
							onMouseLeave={decreaseWeight}
						>
							{section2}
						</a>
						<a
							href="#"
							onMouseOver={increaseWeight}
							onMouseLeave={decreaseWeight}
						>
							{section3}
						</a>
					</>
				) : null}
			</StyledCollapsible>
		</div>
	);

	function increaseWeight(e) {
		e.target.style.fontWeight = 600;
	}
	function decreaseWeight(e) {
		e.target.style.fontWeight = 400;
	}
}

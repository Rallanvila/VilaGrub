export default function NavContent() {
	return (
		<>
			{/* <div className="navbar__expanded"> */}
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
				<a href="#" type="button" className="btn btn-light">
					Sign in
				</a>
				<a href="#" type="button" className="btn btn-dark ">
					Join Now
				</a>
				<div className="navbar__find-store">
					<i
						className="fas fa-map-marker-alt"
						style={{ fontSize: "1.5rem" }}
					></i>
					<span className="title">Find a store</span>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

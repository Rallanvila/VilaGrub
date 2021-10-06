function Footer() {
	return (
		<footer className="footer">
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">About Us</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<a href="#" className="collapsible__content">
					Locations
				</a>
				<a href="#" className="collapsible__content">
					Our Company
				</a>
				<a href="#" className="collapsible__content">
					Stories and News
				</a>
			</div>
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">Careers</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<a href="#" className="collapsible__content">
					Culture and Values
				</a>
				<a href="#" className="collapsible__content">
					Inclusion, Diversity and Equity
				</a>
				<a href="#" className="collapsible__content">
					U.S. Careers
				</a>
			</div>
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">Order and Pickup</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<div className="collapsible__content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					pariatur voluptates provident doloribus delectus fugiat iste
					recusandae totam veniam possimus.
				</div>
			</div>
			<div className="footer__social">
				<i className="fab fa-facebook-f"></i>
				<i className="fab fa-instagram"></i>
				<i className="fab fa-youtube"></i>
				<i className="fab fa-twitter"></i>
			</div>
			<h2 className="footer__section">Privacy Policy</h2>
			<h2 className="footer__section">Terms of Use</h2>
			<h2 className="footer__section">Hire me!</h2>
		</footer>
	);

	function handleClick() {
		const collapsibleContent = document.querySelectorAll(".collapsible");

		collapsibleContent.forEach((c) =>
			c.addEventListener("click", function () {
				this.classList.contains("collapsible--expanded")
					? this.classList.remove("collapsible--expanded")
					: this.classList.add("collapsible--expanded");
			}),
		);
	}
}

export default Footer;

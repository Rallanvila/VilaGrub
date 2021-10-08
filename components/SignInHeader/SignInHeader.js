import logo from "../../svg/logo.svg";
import Image from "next/image";
import { SignInNav } from "../../helpers/SignInNav.styled";

export default function SignInHeader() {
	return (
		<div>
			<SignInNav>
				<Image src={logo} alt="logo" width={75} height={75} />
			</SignInNav>
			<h1 style={{ margin: "4rem auto 4rem", width: "fit-content" }}>
				Sign in or create an account
			</h1>
		</div>
	);
}
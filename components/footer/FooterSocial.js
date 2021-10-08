import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const StyledFooterSocial = styled.div`
  display: flex;
		margin: 2rem 0;
		align-items: center;
		padding: 2.5rem 0 0;
		border-top: 2px solid rgba(128, 128, 128, 0.466);
		.fab {
			color: #fff;
			padding: 0.5rem;
			font-size: 1.2rem;
			background: #212529;
			margin-right: 1rem;
			border-radius: 50%;
			cursor: pointer;
			&.fa-facebook-f {
				font-size: 18px;
				padding: 8px 10px;
			}
		}
        svg{
            color: #fff;
			padding: 0.5rem;
			font-size: 2.5rem;
			background: #212529;
			margin-right: 1rem;
			border-radius: 50%;
			cursor: pointer;
        }
	}
`;

export function FooterSocial() {
	return (
		<StyledFooterSocial>
			<FaFacebookF />
			<FaInstagram />
			<FaYoutube />
			<FaTwitter />
		</StyledFooterSocial>
	);
}

export default FooterSocial;

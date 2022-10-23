import { Link } from 'preact-router/match';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const menuList = [
	{
		socialIcon: <FaFacebookF />,
		socialUrl: 'https://facebook.com'
	},
	{
		socialIcon: <FaInstagram />,
		socialUrl: 'https://instagram.com'
	},
	{
		socialIcon: <FaTwitter />,
		socialUrl: 'https://twitter.com'
	}
];

const SocialNav = () => (
	<nav id="social-nav" className="social-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.socialUrl}>
						<Link exact activeClassName="active" href={menuItem.socialUrl}>{menuItem.socialIcon}</Link>
					</li>
				))
			}
		</ul>
	</nav>
);
export default SocialNav;



import MainNavigation from '../menu/main-nav';
import {LogoIcon} from "../svgs-list"

const Header = () => (
	<header id="header">
		<div className="holder">
			<div className="logo"><a href="/"><LogoIcon /></a></div>
			<MainNavigation />
		</div>
	</header>
);

export default Header;


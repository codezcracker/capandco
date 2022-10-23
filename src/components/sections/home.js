import { Fragment } from 'preact';
import Skill from "./skill";
import Portfolio from "./portfolio";
import About from "./about";
import Banner from "./banner";
import CircleAnimation from "./circle-animation";
import Achievement from "./achievement";

const Home = () => (
	<Fragment>
		<Banner />
		<Skill />
		<Portfolio />
		<Achievement />
		<About />
	</Fragment>
);

export default Home;

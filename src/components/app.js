import { Router } from 'preact-router';
import Header from './sections/header';
import Footer from './sections/footer';
import Home from "./sections/home";
import Skill from './sections/skill';
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import MainNavigation from "./menu/main-nav";

const App = () => (
	<div id="app">
		<Header />
		<aside id="side-navigation">
			<MainNavigation />
		</aside>
		<Router>
			<Home path="/" />
			<Skill path="/skills" />
			<Portfolio path="/portfolio" />
			<About path="/about" />
		</Router>
		<Footer />
	</div>
)

export default App;

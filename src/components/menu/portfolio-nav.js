import {Link} from "preact-router/match";
import Image1 from '../../assets/images/Asset-3-100-2.jpeg';
import Image2 from '../../assets/images/Asset-3-100-2.jpeg';
import Image3 from '../../assets/images/Asset-3-100-2.jpeg';
import Image4 from '../../assets/images/Asset-3-100-2.jpeg';


const menuList = [
	{ listName: 'Regal', listUrl: 'http://www.google.com', listImage: Image1 },
	{ listName: 'Pam Performance', listUrl: 'http://www.google.com', listImage: Image2 },
	{ listName: 'Aed Miles', listUrl: 'http://www.google.com', listImage: Image3 },
	{ listName: 'Fasion Citi', listUrl: 'http://www.google.com', listImage: Image4 },
];

const PortfolioNav = () => (
	<nav id="portfolio-nav" className="portfolio-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}>
						<a target="_blank" href={menuItem.listUrl}>
							<img src={menuItem.listImage} />
							<div className="portfolio-holder">
								<h3>{menuItem.listName}</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto at, beatae blanditiis dolorem dolores doloribus eaque.</p>
							</div>
						</a>
					</li>
				))
			}
		</ul>
	</nav>
);

export default PortfolioNav
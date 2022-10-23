import PatternBg from '../../assets/images/hexa-shape.svg';

import { FaHandPeace } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const menuList = [
	{ listName: 'Projects Completion', listCount: '20', listIcon: <FaHandPeace /> },
	{ listName: 'Happy Clients', listCount: '100', listIcon: <FaUsers /> },
	{ listName: 'Goal Achievements', listCount: '56', listIcon: <FaAward /> },
];

const AchievementNav = () => (
	<nav id="achievement-nav" className="achievement-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}>
						<img src={PatternBg} />
						{menuItem.listIcon}
						<span>{menuItem.listName}</span>
						<span className="achievement-count">{menuItem.listCount}</span>
					</li>
				))
			}
		</ul>
	</nav>
);

export default AchievementNav
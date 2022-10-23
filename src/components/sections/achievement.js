import ImageBg from '../../assets/images/pattern-bg.svg';
import AchievementNav from "../menu/achievement-nav";

const Achievement = () => (
	<section id="achievement-section" className="achievement-section normal-height">
		<img className="pattern-bg" src={ImageBg} />
		<h1>Achievement</h1>
		<div className="holder">
			<AchievementNav />
		</div>
	</section>
);

export default Achievement;

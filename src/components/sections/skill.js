import {SkillsProgress} from "../menu/skills-nav";

const Skill = () => (
	<section id="skill-section" className="skill-section" style="background-image: url('../../assets/images/skill-bg.jpg')">
		<h1>Skills</h1>
		<div className="holder">
			<SkillsProgress />
		</div>
	</section>
);

export default Skill;

import {SkillsProgress} from "../menu/skills-nav";

const Skill = () => (
	<section id="skill-section" style="background-image: url('../../assets/images/skill-bg.jpg')">
		<h1>Skills</h1>
		<div className="section-position">
			<div className="section-table">
				<div className="section-table-cell">
					<div className="section-table-data">
						<SkillsProgress />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Skill;

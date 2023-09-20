import './css/Skills.css';
import { useState, useEffect } from 'react';
import skillsImgs from './skillsImgs';
import skillsDescriptions from './skillsDescriptions';
import Buttons from './components/Buttons';

function Skills() {
  const skills = ['git', 'github', 'html', 'css', 'js', 'ts', 'jest', 'react', 'redux',
    'docker', 'express', 'mysql', 'sequelize', 'node', 'mongodb', 'python'];
  const [selectedSkill, setSelectedSkill] = useState<string>(skills[0]);
  const [renderSelectedIcon, setRenderSelectedIcon] = useState<string>(skillsImgs.git);
  const [renderDescription,
    setRenderDescription] = useState<string>(skillsDescriptions.git);

  useEffect(() => {
    setRenderSelectedIcon(skillsImgs[selectedSkill]);
    setRenderDescription(skillsDescriptions[selectedSkill]);
  }, [selectedSkill]);

  const nextSkill = () => {
    const index = skills.indexOf(selectedSkill);
    if (index >= skills.length - 1) {
      return setSelectedSkill(skills[0]);
    } return setSelectedSkill(skills[index + 1]);
  };

  const previousSkill = () => {
    const index = skills.indexOf(selectedSkill);
    if (index <= 0) {
      return setSelectedSkill(skills[skills.length - 1]);
    } return setSelectedSkill(skills[index - 1]);
  };

  return (
    <div className="skillsPage" id="skills">
      <h1 className="skillsTitle">Habilidades</h1>
      <div className="skillsContent">
        <div className="iconsAndButtons">
          <ul className="iconsContainer">
            {skills.map((skill) => (
              <li key={ skill } className="outsideIcon">
                <img
                  src={ skillsImgs[skill] }
                  alt={ `${skill} Icon` }
                  className="icons"
                />
              </li>
            ))}
          </ul>
          <Buttons previousSkill={ previousSkill } nextSkill={ nextSkill } />
        </div>
        <div className="descriptionSkill">
          <img
            src={ renderSelectedIcon }
            alt="Selected skill Icon"
            className="backgroundIcon"
          />
          <p className="skillsText">
            {renderDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

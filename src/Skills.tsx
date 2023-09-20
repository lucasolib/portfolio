import './css/Skills.css';
import { useState, useEffect } from 'react';
import skillsImgs from './skillsImgs';
import skillsDescriptions from './skillsDescriptions';

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
      <div className="skillsDescriptions">
        <div className="iconsContainer">
          <div className="outsideIcon">
            <img
              src={ skillsImgs.git }
              alt="Git Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.github }
              alt="GitHub Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.html }
              alt="HTML5 Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.css }
              alt="CSS3 Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.js }
              alt="JavaScript Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.ts }
              alt="TypeScript Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.jest }
              alt="Jest Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.react }
              alt="React Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.redux }
              alt="Redux Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.docker }
              alt="Docker Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.express }
              alt="Express Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.mysql }
              alt="MySQL Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.sequelize }
              alt="Sequelize Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.node }
              alt="NodeJS Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.mongodb }
              alt="MongoDB Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src={ skillsImgs.python }
              alt="Python Icon"
              className="icons"
            />
          </div>
          <button
            type="button"
            onClick={ previousSkill }
            className="arrowButtonLeft"
          >
            <span className="arrow" />
            Anterior
          </button>
          <button
            type="button"
            onClick={ nextSkill }
            className="arrowButton"
          >
            Próximo
            <span className="arrow" />
          </button>
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

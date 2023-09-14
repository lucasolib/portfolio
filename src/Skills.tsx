import './css/Skills.css';
import { useState } from 'react';

function Skills() {
  const skills = ['git', 'github', 'html', 'css', 'js', 'ts', 'jest', 'react', 'redux',
    'docker', 'express', 'mysql', 'sequelize', 'node', 'mongodb', 'python'];
  // const skillsImgs = {
  //   git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg',
  //   github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
  //   html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
  //   css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
  // };
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
              alt="Git Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="GitHub Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              alt="HTML5 Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              alt="CSS3 Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="Jest Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
              alt="Docker Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              alt="Express Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
              alt="MySQL Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
              alt="Sequelize Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="NodeJS Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB Icon"
              className="icons"
            />
          </div>
          <div className="outsideIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
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
        <p className="skillsText">Futuro texto sobre descrição das Skills</p>
      </div>
    </div>
  );
}

export default Skills;

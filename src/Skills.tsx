import './css/Skills.css';
import { useState, useEffect, useMemo } from 'react';
import ISkills from './interfaces/skills';

function Skills() {
  const skills = ['git', 'github', 'html', 'css', 'js', 'ts', 'jest', 'react', 'redux',
    'docker', 'express', 'mysql', 'sequelize', 'node', 'mongodb', 'python'];
  const skillsImgs: ISkills = useMemo(() => ({
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg',
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
    js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg',
    express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg',
    sequelize: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg',
    node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
  }), []);
  const [selectedSkill, setSelectedSkill] = useState<string>(skills[0]);
  const [renderSelectedIcon, setRenderSelectedIcon] = useState<string>(skillsImgs.git);

  useEffect(() => {
    setRenderSelectedIcon(skillsImgs[selectedSkill]);
  }, [selectedSkill, skillsImgs]);

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
            Git é um sistema de controle de
            versão distribuído que permite aos desenvolvedores rastrear
            e gerenciar mudanças no código fonte de um projeto, facilitando
            a colaboração e a manutenção do software.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

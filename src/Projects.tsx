import './css/Project.css';
import { useState, useEffect, useMemo } from 'react';
import Buttons from './components/Buttons';

function Projects() {
  const fullProjects = useMemo(() => ['soon', 'soon1', 'soon2',
    'soon3', 'soon4', 'soon5'], []);
  const [projects, setProjects] = useState<string[]>(['soon', 'soon',
    'soon', 'soon', 'soon', 'soon']);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  window.addEventListener('load', () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 818) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });

  useEffect(() => {
    if (window.innerWidth <= 818) {
      setProjects([fullProjects[0]]);
    } else {
      setProjects(['soon', 'soon', 'soon', 'soon', 'soon', 'soon']);
    }
  }, [isMobile, fullProjects]);

  const nextProject = () => {
    const index = fullProjects.indexOf(projects[0]);
    if (index >= fullProjects.length - 1) {
      return setProjects([fullProjects[0]]);
    } return setProjects([fullProjects[index + 1]]);
  };

  const previousProject = () => {
    const index = fullProjects.indexOf(projects[0]);
    if (index <= 0) {
      return setProjects([fullProjects[fullProjects.length - 1]]);
    } return setProjects([fullProjects[index - 1]]);
  };

  return (
    <div className="projectPage" id="project">
      <h1 className="projectTitle">Projetos</h1>
      <ul className="projects">
        {projects.map((i) => (
          <li key={ i }>
            <img src="https://i.imgur.com/hsg3wCj.png" alt="Em breve" className="soonImg" />
            <p className="description">
              Nome: Em breve
            </p>
            <p className="description">GitHub: Em breve</p>
            <p className="description">Projeto: Em breve</p>
          </li>))}
      </ul>
      {isMobile ? <Buttons previous={ previousProject } next={ nextProject } /> : null}
    </div>
  );
}

export default Projects;

import './css/Project.css';

function Projects() {
  const projects = ['soon', 'soon', 'soon', 'soon', 'soon', 'soon'];
  return (
    <div className="projectPage" id="project">
      <h1 className="projectTitle">Projetos</h1>
      <ul className="projects">
        {projects.map((project, i) => {
          return (
            <li key={ i }>
              <img src="https://i.imgur.com/hsg3wCj.png" alt="Em breve" className="soonImg" />
              <p className="description">Nome: Em breve</p>
              <p className="description">GitHub: Em breve</p>
              <p className="description">Projeto: Em breve</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;

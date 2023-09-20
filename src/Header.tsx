import './css/Header.css';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.getElementById('stickyHeader');
    const scrollTop = window.scrollY;
    if (scrollTop >= 1) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  };

  return (
    <div className="header" id="stickyHeader">
      <p className="logo">Futura Logo</p>
      <a className="link" href="#beginning">
        <p>Início</p>
      </a>
      <a className="link" href="#about">
        <p>Sobre mim</p>
      </a>
      <a className="link" href="#skills">
        <p>Habilidades</p>
      </a>
      <a className="link" href="#project">
        <p>Projetos</p>
      </a>
      <a className="link" href="#contact">
        <p>Contatos</p>
      </a>
    </div>
  );
}

export default Header;

import './Header.css';
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
      <a href="#beginning">
        <p>Início</p>
      </a>
      <a href="#about">
        <p>Sobre mim</p>
      </a>
      <p>Habilidades</p>
      <p>Projetos</p>
      <p>Contatos</p>
    </div>
  );
}

export default Header;

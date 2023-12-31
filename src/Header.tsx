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
      <img
        className="logo"
        alt="portfolioLogo"
        src="https://i.imgur.com/GFyTxKs.png"
      />
      <nav className="dropDown">
        {/* <img
          src="https://static.thenounproject.com/png/356889-200.png"
          alt="menuButton"
        /> */}
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
      </nav>
    </div>
  );
}

export default Header;

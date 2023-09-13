import './css/Contact.css';

function Contact() {
  return (
    <div className="contactPage">
      <ul className="socialMediaButtons">
        <li>
          <a href="https://github.com/lucasolib" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/HIH1JNg.png" alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/lucasthbatista" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/Qvf748k.png" alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-de-oliveira-dev/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/Lf6Q1rv.png" alt="linkedin logo" />
          </a>
        </li>
        <li>
          <a href="mailto:lucasolibatista@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/yTJq0yC.png" alt="email logo" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5522996089686" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/56doQic.png" alt="whatsapp logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

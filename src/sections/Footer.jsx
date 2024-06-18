import { useState } from 'react';
import { Popup } from '../components';

export const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const response = { status: 'Copiado', message: '' };

  const handleClick = () => {
    navigator.clipboard
      .writeText('bracoagustin@gmail.com')
      .then(() => {
        setIsPopupVisible(true);
        const timer = setTimeout(() => {
          setIsPopupVisible(false);
        }, 2500);
      })
      .catch(err => {
        console.log('Error al copiar', err);
      });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="Footer">
      <div className="FooterTop">
        <div>
          <p className="FooterTitle">Contacto</p>
          <p onClick={handleClick} className="FooterText">
            bracoagustin@gmail.com
          </p>
          <a
            target="_blank"
            className="FooterText"
            href="https://www.linkedin.com/in/agust%C3%ADn-braco/"
          >
            linkedin/agustin.braco
          </a>
        </div>

        <div onClick={scrollTop} className="FooterUp"></div>
      </div>

      <p className="FooterCopyright">Copyright © 2024 all rights reserved.</p>

      {isPopupVisible && <Popup response={response} />}
    </footer>
  );
};

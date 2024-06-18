import { useState } from 'react';

export const Logo = () => {
  const [logoStatus, setLogoStatus] = useState('play');
  const [currentRadius, setCurrentRadius] = useState('');

  const ToggleBubble = () => {
    logoStatus === 'play' ? setLogoStatus('stop') : setLogoStatus('play');

    const menuElement = document.getElementById('Logo');
    const borderRadius = window.getComputedStyle(menuElement).borderRadius;
    setCurrentRadius(borderRadius);
  };

  return (
    <div
      id="Logo"
      style={{ '--current-radius': currentRadius }}
      className={logoStatus}
      onClick={() => ToggleBubble()}
    ></div>
  );
};

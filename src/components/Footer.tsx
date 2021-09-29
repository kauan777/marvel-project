import React from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { FooterSocial } from '../../styles/footer';

const Footer: React.FC = () => {
  return (  
    <FooterSocial>
    <div className="social-media">
      <a href="https://www.instagram.com/ikauan.costa/" target="_blank"><img src={instagram.src} alt="Icone do Instagram" /></a>
      <a href="https://github.com/kauan777" target="_blank"><img src={github.src} alt="Icone do Instagram" /></a>
      <a href="https://www.linkedin.com/in/kauancosta/" target="_blank"><img src={linkedin.src} alt="Icone do Instagram" /></a>
    </div>
    <span>Criado por @Kauan Costa</span>
  </FooterSocial>
  )
}

export default Footer;
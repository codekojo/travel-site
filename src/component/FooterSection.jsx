import React from 'react';
import facebook from '../icons/twitter.svg';
import instagram from '../icons/instagram.svg';
import youtube from '../icons/youtube.svg';
import './Footer.css'

export default function FooterSection(){
   return(
      <footer className="footer--page">
      <div className="container container--page">
         <p>WeTravel</p>
         <ul className="footer--nav">
            <a href="#bb" target="_blank"> <img src={facebook} alt=""/> </a>
            <a href="##" target="_blank"><img src={instagram} alt=""/></a>
            <a href="##" target="_blank"><img src={youtube} alt=""/></a>
         </ul>
         </div>
      </footer>
   );
}
import React from 'react';
import FormContact from './Form';
import './Footer.css';


const footerStyle = {
   minHeight: "100vh",
}

export default function Footer(){
   return (
      <section className="footer--section" style={footerStyle}>
         <FormContact />
      </section>
   );
}
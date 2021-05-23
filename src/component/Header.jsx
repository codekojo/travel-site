import React from 'react';


const bgStyle = {
   backgroundColor: "#131c27",
}

export default function Header(){
   return( 
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={bgStyle}>
      <div className="container text-white">
      <a className ="header--title navbar-brand text-white" href="#">WeTravel</a>
      <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav text-white">
          <a className="nav-link text-white" href="#locations">Locations</a>
          <a className="nav-link text-white" href="#benefits">Benefits</a>
          <a className="nav-link text-white" href="#contact">Contact</a>
        </div>
      </div>
      </div>
    </nav>
   );
}
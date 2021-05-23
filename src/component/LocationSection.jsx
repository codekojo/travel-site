import React from 'react';
import './LocationSection.css';
import cloud from '../img/cloud.png';

export default function LocationSection(){
   return(
      <section id="locations">
         <div className="container-sm">
            <h2 className="display-4">Time to explore</h2>
            <p className="lead">Has your dream always being to visit New York City? <span>We can make it possible </span></p>
            <img src={cloud} className="img-fluid cloud moving-cloud-1" alt=""/>
            <img src={cloud} className="img-fluid d-none d-lg-block cloud moving-cloud-2" alt=""/>
         </div>
         
      </section>
   );
}
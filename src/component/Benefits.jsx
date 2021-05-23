import React from 'react';
import './Benefits.css';
import cardInformation from '../cardDetails';
import CardSection from './CardSection';



export default function Benefit(){
   return(
      <section id="benefits">
      <header className="description--section">
         <div className="container container--benefit text-center">  
                 <h2 className="display-4 p-1">The Perfect Travelling Experience</h2> 
                 <p className="lead">We cover everything from picking you from the airport, <br/>to the perfect hotel and providing excellent services for your need</p>

         </div>
         </header>
         <section className="card--section text-center" >
            <div className="container">
            <div className="row">
               {cardInformation.map(card => {
                  return( <CardSection title={card.title} desc={card.desc} img={card.img}/>);
               })}
               </div>
               </div>
            
         </section>

      </section>
   );
}
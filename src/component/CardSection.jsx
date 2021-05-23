import React from 'react';

const imgStyle = {
  maxWidth: '15%',
  margin: '2rem 0'
};

export default function CardSection({title, img, desc}){
   return(
      <div className="col-sm-12 col-md-4 ">
                  <div class="card card--style">
                  <div className="card--icon">
                  <img style={imgStyle}src={img} class="card-img-top" alt="..." />
                  </div>
        
         <div class="card-body">
          <h5 class="card-title">{title}</h5>
         <p class="card-text">{desc}</p>
      
         </div>
         </div>
       </div>
   );
}
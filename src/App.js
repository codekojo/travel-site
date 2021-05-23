import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import LocationSection from './component/LocationSection';
import Benefit from './component/Benefits';
import Footer from './component/Footer';
import FooterSection from './component/FooterSection';



export default function App(){
   return (
      <>
      <Header />
      <Hero/>
      <LocationSection/>
      <Benefit />
      <Footer/>
      <FooterSection/>
      </>
   );
}
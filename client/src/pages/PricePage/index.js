import React from 'react'
import Header from '../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import PricePackages from './../../components/PricePackages';

const PricePage=()=> {
    return (
      <>
        <Header/>
          <PricePackages/>
         <Footer/>
      </>
    );
  }
export default PricePage;

import React from 'react'
import packages from './PricingData.json';
import PricePack from './PricePack';
import style from './PricePackages.module.scss';

 const PricePackages=()=> {
  const renderPackages=(packagePrice,i)=>(<PricePack key={i}  packagePrice={packagePrice} />
  );
  return (
    <div className={style.container}>
      <h1 className={style.page_heading}> Select a Package for your Managed Branding Contest</h1>
      <section className={style.page_section}>
        {
          packages.map(renderPackages)
        }
      </section>
    </div>
  );
};
export default PricePackages;
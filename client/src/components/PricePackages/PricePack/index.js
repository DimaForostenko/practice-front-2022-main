import React,{useState} from 'react';
import styles from './../PricePackages.module.scss';
 
const PricePack=(props)=> {
  const[isOpens,setIsOpens] = useState(false);
  const {
    packagePrice:{title,
    decription,
    options,
    color,
    price:{current,amount},
  },
} = props;
  const renderOption=(opt,i)=><li key={i}>{opt}</li>;
  return (
    <article style={{borderColor:`${color}`}} className={styles.package}>
<div style={{borderColor:`${color}`}} className={styles.package_box}>
<h2>{title}</h2>
<p>{decription}</p>
<h3>{current}{amount}</h3>
</div>
<ul>
{
options.map(renderOption)
}
</ul>
<button style={{backgroundColor:`${color}`}}>
  start
</button>
    </article>
  )
}
export default PricePack;
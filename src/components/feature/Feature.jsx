import React from 'react'
import './feature.css';

//import Feature  from '../feature/Feature';

const Feature = ({title,text}) => (
    <div className='gpt3__features-container__feature'>
    {/* check the names and empty div here */}
      <div className='gpt3__features-container__feature-title'>
      <div />
      <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>

)

export default Feature;
import React from 'react'
import './SurpriseMe.css'
import {Link} from 'react-router-dom'

export const SurpriseMe = () => {
  function getRandomInt() {
    return(Math.floor(Math.random() * 73296)+ 1);
  }
  let num = getRandomInt();
  let path = '/bookcontent/' + num;
  
  return (
    <div className='container'>
        <div className='surprise-text'>Don't know what to read?</div>
        <Link className='link' to={{
          pathname: path,
        }}>
        <button className='surprise-button'>SURPRISE ME</button>
        </Link>
    </div>
  )
}

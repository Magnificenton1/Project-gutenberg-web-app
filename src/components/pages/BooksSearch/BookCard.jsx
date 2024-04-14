import React from 'react'
import './BookCard.css'
import {Link} from 'react-router-dom'

export const BookCard = ({result, favourites}) => {
  let imageURL = "https://www.gutenberg.org/cache/epub/"+ String(result.id) + "/pg" + String(result.id) + ".cover.medium.jpg";
  let path = '/bookcontent/' + result.id;
  let containsId = favourites.includes(String(result.id));

  return (
    
    <div className={`${containsId ? "fav-card" : "card"}`}> 
        <img src={imageURL}  className='cover'></img>
        <Link to={{
          pathname: path,
        }} className='link'>
        <div className={`${containsId ? "fav-text" : "text"}`}>{result.title}</div>
        </Link>
    </div>

  )
}
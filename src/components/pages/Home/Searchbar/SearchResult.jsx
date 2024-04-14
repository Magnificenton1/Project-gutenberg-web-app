import React from 'react'
import './SearchResult.css'
import {Link} from 'react-router-dom'

export const SearchResult = ({result}) => {
  let path = '/bookcontent/' + result.id;
  return (
    <div className='search-result'>
        <Link className='link' to={{
          pathname: path,
        }}>
        {result.title}
        </Link>
    </div>
  )
}

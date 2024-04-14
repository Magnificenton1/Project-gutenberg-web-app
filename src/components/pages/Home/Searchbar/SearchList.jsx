import React from 'react'
import './SearchList.css'
import { SearchResult } from './SearchResult'

export const SearchList = ({results}) => {
  return <div className='search-list'>
        {
            results.map((result, id) => {
                return <SearchResult result={result} key={id}/>;
            })
        }
    </div>
  
}

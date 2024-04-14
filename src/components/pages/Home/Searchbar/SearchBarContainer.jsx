import React, {useState} from 'react'
import './SearchBarContainer.css'
import { SearchList } from './SearchList'
import { SearchBar } from './SearchBar'



export const SearchBarContainer = ({data}) => {
  const [results, setResults] = useState([]); // do przekazania danych z komponentów filtrujących dane do tych co wyświetlają dane
  return (
    <div className='search-bar-container'>
      <SearchBar setResults={setResults} data={data}/> 
      <SearchList results={results}/>
    </div>
  )
} // SearchBar - wyswietla sam Search bar i filtruje dane związane z nim; gets data returns results
  // SearchList - wyświetla wyniki wyszukiwania przy pomocy map i komponentu SearchResult

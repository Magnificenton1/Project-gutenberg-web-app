import React, {useState, useEffect}from 'react'
import { BookList } from './BooksSearch/BookList';

export const Saved = ({favourites}) => {
  const [savedResults, setSavedResults] = useState([]);
  const demoUrl = 'https://gutendex.com/books?ids=';
  let url;
  
  useEffect(() => {
    createUrl();
  }, [, favourites]);



  const createUrl = () =>{ // CREATES URL WITH IDS OF BOOKS IN FAVOURITES
    if(favourites.length > 0){
      url = demoUrl;
      for(let i = 0; i < favourites.length; i++){
        if(i+1 == favourites.length){
          url += favourites[i];
        }else{
          url += favourites[i] + ',';
        }
      }
    }else{
      url = demoUrl;
      url += '0';
    }
    fetchData(url);
  }

  const fetchData = (givenUrl) =>{ // api fetch passed to "BookList" to show results
    fetch(givenUrl)
      .then((response) => response.json())
      .then((api) => {
        const data = api.results;
        setSavedResults(data);

      }).catch((error) => console.error("Error:", error));
  }
  return (
    <div>
      <div className='page-sign'>SAVED</div>
      <BookList filteredResults={savedResults} favourites={favourites}/> 
    </div>
  ) // i re-used BookList
}

import React, {useState, useEffect} from 'react'
import { BookList } from './BooksSearch/BookList'
import { BookFilters } from './BooksSearch/BookFilters';


export const BooksSearch = ({favourites, setFavourites}) => {
//              PASSING DATA FORWARD
  const [results, setResults] = useState([]);
//              FILTERING USESTATES
  const [authorValue, setAuthorValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [topicValue, setTopicValue] = useState("");
  const [selectedLang, setSelectedLang] = useState([]);
  const [page, setPage] = useState([]);
  const [count, setCount] = useState([]);

  const demoUrl = 'https://gutendex.com/books';
  let url;

  const filterURL = () =>{ // tworzy URL i przekazuje do fetch
    url = demoUrl;
    url += '?search=' + authorValue + '%20' + titleValue + '&topic=' + topicValue;
      if(selectedLang.length > 0){
        url += '&languages=';
        for(let i = 0; i < selectedLang.length; i++){
          url += selectedLang[i] + ',';
        }
      }
      if(page < 1){
        url+= '&page=1';
      }else{
        url+= '&page=';
        url+= page;
      }
      fetchData(url);
  }
  const fetchData = (givenUrl) =>{ // API FETCH
    fetch(givenUrl)
      .then((response) => response.json())
      .then((api) => {
        setCount(api.count);     // potrzebne do dodania zabezpieczeń do przycisku next
        setResults(api.results);  
      }).catch((error) => console.error("Error:", error));
  }

  return (
    <div className='book-search-box'>
      <BookFilters selectedLang={selectedLang} setSelectedLang={setSelectedLang} page={page} setPage={setPage} setAuthorValue={setAuthorValue} setTitleValue={setTitleValue} setTopicValue={setTopicValue} filterURL={filterURL} fetchData={fetchData} count={count}/>
      <BookList filteredResults = {results} favourites={favourites} setFavourites={setFavourites}/>
    </div>
  )
}

import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from './../../../../assets/searchicon.svg'

export const SearchBar = ({setResults}) => { // setResults - do przesyłania przefiltrowanych danych do dalszych plików, data - dane przekazane od api
    const [input, setInput] = useState(""); // wyswietla text input w wyszukiwarce

    const demoUrl = 'https://gutendex.com/books';
    let url;
    
    const filterURL = () =>{
        url = demoUrl;
        url += '?search=%20' + input;
        fetchData(url);
    }

    const fetchData = (givenUrl) =>{
        fetch(givenUrl)
          .then((response) => response.json())
          .then((api) => {
            setResults(api.results);
          }).catch((error) => console.error("Error:", error));
    }
    
 
    const handleChange = (value) => { //powoduje zmiane text inputu (widzisz tekst który wpisujesz) i filtrowanie danych na bazie wpisanego tekstu
        setInput(value);
        if(value.length > 2){
            filterURL()
        }else{
            setResults([]);
        }
    };


   return (  // final return + icon
     <div className='input-wrapper'> 
         <img src={SearchIcon} alt="search icon" id="search-icon"></img>  
         <input 
           placeholder='Type to search...'
           value= {input} 
           onChange={(e) => handleChange(e.target.value)} // wywołuje funkcje za kazdym razem kiedy wpisuje sie tekst
         />
     </div>
   );
}

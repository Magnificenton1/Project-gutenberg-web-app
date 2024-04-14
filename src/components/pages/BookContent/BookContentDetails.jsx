import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './BookContentDetails.css';
import {FaStar} from 'react-icons/fa';

export const BookContentDetails = ({favourites, setFavourites}) => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;
  let fetchLink = 'https://gutendex.com/books?ids=' + id;
  let imageURL = "https://www.gutenberg.org/cache/epub/"+ String(data.id) + "/pg" + String(data.id) + ".cover.medium.jpg";
  let textPlainURL = "https://www.gutenberg.org/ebooks/"+ String(data.id) + ".txt.utf-8";
  let textHtmlURL = "https://www.gutenberg.org/ebooks/"+ String(data.id) + ".html.images";
  let containsId = favourites.includes(id);


  const fetchData = () => { //FETCH URL FOR ONE BOOK
    fetch(fetchLink)
    .then((response) => response.json())
    .then((api) => {
      const ApiData = api.results[0];
      setData(ApiData);
    }).catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleFavButtonClick = (selectedId) => {
    if (containsId) {
      let fav = favourites.filter((el) => el !== selectedId);
      setFavourites(fav);
    } else {
      setFavourites([...favourites, selectedId]);
    }
  };

  return (
    <div className='whole-box'>
    <div className='book-content-info-box'>
        <h2>{data.title}: {id} </h2><FaStar className={`${containsId ? "star-active" : "star"}`} onClick={() => handleFavButtonClick(id)}/>
    </div>
    <div className='book-content-box'>
        <div className='topic-container'>
          <div className='subject-container'><h2>Subjects:</h2>
          <div>
            {data.subjects?.map((item, index) => (
          <div key={index}>{item}</div>
          ))}
          </div>
          </div>
          <div className='bookshelves-container'><h2>Bookshelves:</h2>
          <div>
            {data.bookshelves?.map((item, index) => (
          <div key={index}>{item}</div>
          ))}
          </div>
          </div>
        </div>
        <div className='other-container'>
          <div className='author-box'><h2>Author:</h2>
          <div>
            {data.authors?.map((item, index) => (
          <div key={index}>{item.name}: {item.birth_year}-{item.death_year}</div>
          ))}
          </div>
            </div>
          <div className='read-now-box'><h2>Read now!</h2>
            <button className='content-button'><a href={textHtmlURL} target="_blank">Text/Html</a></button><button className='content-button second-btn'><a href={textPlainURL} target="_blank">PlainText</a></button>
          </div>
        </div>
        <div className='cover-container'>
          <div>
            <img src={imageURL} className='content-image'/>
          </div>
        </div>
    </div>
    </div>
  )
}

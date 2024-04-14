import React from 'react';
import { BookCard } from './BookCard';
import './BookCard.css';

export const BookList = ({filteredResults, favourites}) => {
    if(filteredResults.length < 1){
            return <div className='card'>
                <img src={'https://placehold.co/250x400'} alt='book cover' className='cover'></img>
                <div className='text'>No results were found...</div>

            </div>
    }
    return <div className='book-list'>
        {
            filteredResults.map((result, id) => {
                return <BookCard result={result} key={id} favourites={favourites}/>;
            })
        }
    </div>
}

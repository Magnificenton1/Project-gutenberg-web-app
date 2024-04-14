import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Info, Home, Saved, BooksSearch } from './components/pages' // import z index.js
import { BookContentDetails } from './components/pages/BookContent/BookContentDetails'
import { BookContent } from './components/pages/BookContent'


function App() {
  const [favourites, setFavourites] = useState([]); // 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/saved' element={<Saved favourites={favourites}/>}/>
        <Route path='/booksearch' element={<BooksSearch favourites={favourites} setFavourites={setFavourites}/>}/>
        <Route path='/bookcontent' element={<BookContent/>}>
          <Route path=':id' element={<BookContentDetails favourites={favourites} setFavourites={setFavourites}/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App

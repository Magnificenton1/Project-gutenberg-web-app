import React from 'react'
import { SearchBarContainer } from './Home/Searchbar/SearchBarContainer'
import { SurpriseMe } from './Home/SurpriseMe/SurpriseMe'
import './Home/Home.css'

export const Home = ({data}) => {
  return (
    <div className='home-box'>
      <div className='welcome-container'>
      <h1 className='welcome-message'>WELCOME!</h1>
      <h2 className='welcome-message'>Search for books you want to read!</h2>
      </div>
      <SearchBarContainer data={data}/>
      <SurpriseMe/>
    </div>
  )
}

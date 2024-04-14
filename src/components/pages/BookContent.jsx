import React from 'react'
import { Outlet } from 'react-router-dom'

export const BookContent = () => {
  return ( // TO JEST NA WSZELKI WYPADEK, GDYBYM CHCIAŁ COŚ DODAĆ, CO BY SIE WYSWIETLAŁO PRZED KAŻDYM INFO KSIĄŻKI
    <div>
        <Outlet/>
    </div>
  )
}

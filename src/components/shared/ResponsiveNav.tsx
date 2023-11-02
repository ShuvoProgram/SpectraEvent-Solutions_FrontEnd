import React from 'react'
import { ResponsiveNavbar } from 'react-hamburger-menus'

function ResponsiveNav() {
  return (
    <ResponsiveNavbar
    logo={<p>Logo</p>}
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      navigationBarSmall: {
        backgroundColor: 'aliceblue',
      },
      navigationCardSmall: {
        backgroundColor: 'aliceblue',
      },
    }}
  >
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>ELEMENTS</li>
        <li>CONTACT</li>
      </ul>

  </ResponsiveNavbar>
  )
}

export default ResponsiveNav
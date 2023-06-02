import React from 'react'

function Header({ onDarkModeClick, darkMode }) {
  return (
    <div>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {darkMode ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}

export default Header
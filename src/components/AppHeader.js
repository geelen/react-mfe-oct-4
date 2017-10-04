import logo from './logo.svg'
import React from 'react'

const AppHeader = ({ greeting, onClick }) => (
  <header className={`App-header`}>
    <img src={logo}
         className="App-logo"
         alt="logo"/>
    <h1 className="App-title">
      {greeting}
      <button type="button"
              onClick={onClick}
              className="App-header-button">
        <span role="img"
              aria-label="Switch language">
          ℹ️
        </span>
      </button>
    </h1>
  </header>
)

export default AppHeader

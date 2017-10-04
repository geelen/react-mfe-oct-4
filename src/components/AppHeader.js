import logo from './logo.svg'
import React from 'react'
import styles from './AppHeader.css'

const AppHeader = ({ greeting, onClick }) => (
  <header className={styles.header}>
    <img src={logo}
         className={styles.logo}
         alt="logo"/>
    <h1 className={styles.title}>
      {greeting}
      <button type="button"
              onClick={onClick}
              className={styles.button}>
        <span role="img"
              aria-label="Switch language">
          ℹ️
        </span>
      </button>
    </h1>
  </header>
)

export default AppHeader

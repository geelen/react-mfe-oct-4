import React from 'react'
import styles from './App.css'
import AppHeader from './AppHeader'

console.log(styles)

class App extends React.Component {
  state = {
    greeting: {
      en: 'Welcome to React',
      emoji: '👋⚛️'
    },
    lang: 'en'
  }

  handleClick = () => {
    this.setState({ lang: this.state.lang === 'en' ? 'emoji' : 'en' })
  }

  render() {
    const { greeting, lang } = this.state
    return (
      <div className={styles.wrapper}>
        <AppHeader greeting={greeting[lang]}
                   onClick={this.handleClick}/>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

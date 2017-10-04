import React from 'react'
import './App.css'
import AppHeader from './AppHeader'

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
      <div className="App">
        <AppHeader greeting={greeting[lang]}
                   onClick={this.handleClick}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

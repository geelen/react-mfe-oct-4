import React from 'react'
import logo from './logo.svg'
import './App.css'

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
        ℹ️
      </button>
    </h1>
  </header>
)

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

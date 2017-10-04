import React from 'react'
import logo from './logo.svg'
import './App.css'

const Greeting = ({ greeting, onClick }) => (
  <h1 className="App-title">
    {greeting}
    <button type="button" onClick={onClick}>Click me!</button>
  </h1>
)

const AppHeader = ({ greeting, onClick }) => (
  <header className={`App-header`}>
    <img src={logo} className="App-logo" alt="logo"/>
    <Greeting greeting={greeting} onClick={onClick}/>
  </header>
)

const AppRender = ({ greeting, onClick }) => (
  <div className="App">
    <AppHeader greeting={greeting} onClick={onClick}/>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

class App extends React.Component {
  state = {
    greeting: {
      en: 'Welcome to React',
      emoji: '👋⚛️'
    },
    lang: 'en'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: {
          en: 'Welcome to React!!!',
          emoji: '👋⚛️!!!'
        }
      })
    }, 2000)
  }

  handleClick = () => {
    this.setState({ lang: this.state.lang === 'en' ? 'emoji' : 'en' })
  }

  render() {
    return (
      <AppRender
        greeting={this.state.greeting[this.state.lang]}
        onClick={this.handleClick}
      />
    )
  }
}

export default App

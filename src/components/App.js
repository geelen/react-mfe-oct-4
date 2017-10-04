import React from 'react'
import styles from './App.css'
import ImageFeed from './ImageFeed'

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ImageFeed/>
      </div>
    )
  }
}

export default App

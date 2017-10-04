import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { images_store } from '../store'
import { loadImages } from '../actions'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`

const width = 25
const Image = styled.img`
  max-width: ${width}vw;
  max-height: ${width}vh;
  margin: ${width / 8}vh ${width / 8}vw;
  background: black;
`

class ImageFeed extends React.Component {
  componentDidMount() {
    loadImages()
  }

  render() {
    console.log("Rendering Image Feed")
    const { images, loading } = images_store
    return (
      <Outer>
        {
          loading
            ? <p>Loading...</p>
            : images.map((image, i) => (
              <Image src={image} key={i}/>
            ))
        }
      </Outer>
    )
  }
}

export default observer(ImageFeed)

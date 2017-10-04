import React from 'react'
import styled from 'styled-components'

import { loadImages } from '../actions'
import { connect } from 'react-redux'

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
    this.props.onMount()
  }

  render() {
    console.log("Rendering Image Feed")
    const { images, loading } = this.props
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

export default connect(
  state => ({
    images: state.images,
    loading: state.loading,
  }),
  {
    onMount: loadImages
  }
)(ImageFeed)

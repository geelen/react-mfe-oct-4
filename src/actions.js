import API from './api'

const newVar = async (dispatch) => {
  dispatch({
    type: 'IMAGES_LOADING'
  })

  const images = await API.loadImages()

  dispatch({
    type: 'IMAGES_LOADED_SUCCESSFULLY',
    result: images
  })
}

export const loadImages = () => newVar

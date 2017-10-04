import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const DEFAULT_STATE = {
  images: [],
  loading: false,
}

export const configureStore = () => {
  const rootReducer = (prev_state = DEFAULT_STATE, action) => {
    if (action.type === 'IMAGES_LOADING') {
      return {
        ...prev_state,
        loading: true,
        images: []
      }
    } else if (action.type === 'IMAGES_LOADED_SUCCESSFULLY') {
      return {
        ...prev_state,
        loading: false,
        images: action.result
      }
    } else {
      return prev_state
    }
  }

  return createStore(rootReducer, applyMiddleware(
    logger, thunk
  ))
}

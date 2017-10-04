import API from './api'
import { images_store } from './store'
import { runInAction } from 'mobx'

export const loadImages = async () => {
  images_store.loading = true
  const images = await API.loadImages()

  runInAction(() => {
    images_store.images = images
    images_store.loading = false
  })
}

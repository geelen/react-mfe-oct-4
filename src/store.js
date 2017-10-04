import { observable } from 'mobx'

export const images_store = observable({
  loading: false,
  images: []
})

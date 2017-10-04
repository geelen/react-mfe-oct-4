export const delay = ms => (
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
)

export default {
  loadImages() {
    return delay(500).then(() => {
      return [
        'https://source.unsplash.com/900x900?sunset',
        'https://source.unsplash.com/900x900?cafe',
        'https://source.unsplash.com/900x900?cats',
      ]
    })
  }
}

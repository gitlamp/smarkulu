import React from 'react'
import Img from 'gatsby-image'

const ImageFinder = (props) => {
  let targetImg = null
  const images = props.images.edges

  function findImgFileName(path) {
    return path.replace(/^.*[\\\/]/, '').split(' ')[0]
  }

  images.map(item => {
    const fileName = findImgFileName(item.node.id)
    if (fileName === props.name) {
      /**
       * if 'images' prop was included with 'sizes' prop
       * then render gatsby image with 'sizes' prop
       */
      if (item.node.sizes) {
        targetImg = <Img sizes={item.node.sizes} alt={props.alt}/>
      }
      /**
       * if 'images' prop was included with 'resolutions' prop
       * then render gatsby image with 'resolutions' prop
       */
      if (item.node.resolutions) {
        targetImg = <Img resolutions={item.node.resolutions} alt={props.alt}/>
      }
    }
  })
  return targetImg
}

export { ImageFinder }
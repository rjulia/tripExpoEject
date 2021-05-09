
import _ from 'lodash'

function getImagesTrip(name, images) {
  
  let imgObj
  _.map(images, (image) => {
    if (_.includes(_.get(image, 'public_id'), _.lowerCase(name))) {
      imgObj = image
    }
  })

  return imgObj
}


export default getImagesTrip
import React from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo'

// import TestRenderer from 'react-test-renderer'
const mockPhoto = {
  "title": "Frank_The-Knight",
  "link": "https:\/\/www.flickr.com\/photos\/empmuseum\/43460854280\/",
  "media": {"m":"https:\/\/farm2.staticflickr.com\/1946\/43460854280_d87826f129_m.jpg"},
  "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/empmuseum\/\">MoPOPInteractive<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/empmuseum\/43460854280\/\" title=\"Frank_The-Knight\"><img src=\"https:\/\/farm2.staticflickr.com\/1946\/43460854280_d87826f129_m.jpg\" width=\"161\" height=\"240\" alt=\"Frank_The-Knight\" \/><\/a><\/p> ",
  "author": "nobody@flickr.com (\"MoPOPInteractive\")",
  "author_id": "64943649@N07",
  "tags": "edtang"
}
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Photo item={mockPhoto} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('', () => {})

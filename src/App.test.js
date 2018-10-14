import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

// import TestRenderer from 'react-test-renderer'

const mockData = {
  items: [{
    "title": "DSC_8555.jpg",
    "link": "https:\/\/www.flickr.com\/photos\/129708336@N04\/43460853350\/",
    "media": {"m":"https:\/\/farm2.staticflickr.com\/1936\/43460853350_2b516d7f16_m.jpg"},
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/129708336@N04\/\">ykendler<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/129708336@N04\/43460853350\/\" title=\"DSC_8555.jpg\"><img src=\"https:\/\/farm2.staticflickr.com\/1936\/43460853350_2b516d7f16_m.jpg\" width=\"240\" height=\"160\" alt=\"DSC_8555.jpg\" \/><\/a><\/p> ",
    "author": "nobody@flickr.com (\"ykendler\")",
    "author_id": "129708336@N04",
    "tags": ""
   },
   {
    "title": "Frank_The-Knight",
    "link": "https:\/\/www.flickr.com\/photos\/empmuseum\/43460854280\/",
    "media": {"m":"https:\/\/farm2.staticflickr.com\/1946\/43460854280_d87826f129_m.jpg"},
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/empmuseum\/\">MoPOPInteractive<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/empmuseum\/43460854280\/\" title=\"Frank_The-Knight\"><img src=\"https:\/\/farm2.staticflickr.com\/1946\/43460854280_d87826f129_m.jpg\" width=\"161\" height=\"240\" alt=\"Frank_The-Knight\" \/><\/a><\/p> ",
    "author": "nobody@flickr.com (\"MoPOPInteractive\")",
    "author_id": "64943649@N07",
    "tags": "edtang"
   }]
}
const axios = {
  get: jest.fn(() => Promise.resolve({ data: mockData }))
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe( 'App Component', () => {
  it('starts with no feed', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Loader')).toBeTruthy()
    expect(wrapper.state().feed).toBe(null)
  })

  it.skip('loads feed on mount', () => {
    const wrapper = shallow(<App />)
  })


})

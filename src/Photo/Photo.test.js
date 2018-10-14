import React from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo'
import { shallow, mount } from 'enzyme'

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

describe('Photo Component', () => {
  it('should display the props passed', () => {
    const wrapper = shallow(<Photo item={mockPhoto} />)
    expect(wrapper.find('.title').text()).toEqual(mockPhoto.title)
  })

  it('handles flicrAuthorIsNotAnAuthor admirably', () => {
    const wrapper = shallow(<Photo item={mockPhoto} />)
    expect(wrapper.find('.author').text()).toEqual('MoPOPInteractive')
  })

  it.skip('handles flickrDescriptionIsNotADescription admirably', async () => {
    const wrapper = shallow(<Photo item={mockPhoto} />)
    // const instance = wrapper.instance()
    expect(wrapper.find('.description').text()).toEqual('One of the many quaint streets around the center of the city. ~ Copyright © Gerardo Galindo Contact: Cyberlens@aol.com')
  })

  it('shows correct url for photo', () => {
    const wrapper = shallow(<Photo item={mockPhoto} />)
    expect(wrapper.find('.title[href="https://www.flickr.com/photos/empmuseum/43460854280/"]')).toBeTruthy()
  })

  it('shows correct url for author', () => {
    const wrapper = shallow(<Photo item={mockPhoto} />)
    expect(wrapper.find('.author[href="https://www.flickr.com/photos/64943649@N07/"]')).toBeTruthy()
  })
})

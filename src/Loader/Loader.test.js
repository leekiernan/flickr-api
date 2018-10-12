import React from 'react'
import ReactDOM from 'react-dom'
import Loader from './Loader'

// import TestRenderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loader />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('shows Loading element at boot', () => {})
  // const component = renderer.create(<Loader />)

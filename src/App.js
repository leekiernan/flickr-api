import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import Feed from './Feed/Feed'
import Loader from './Loader/Loader'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { feed: null }
	}

  async componentDidMount() {
  	const feedUrl = '/services/feeds/photos_public.gne?format=json&tags=safe,travel&nojsoncallback=1'
		const feed = await axios.get(feedUrl,  { crossdomain: true })
		this.setState({ feed })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="data:image/png;base64,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" className="App-logo" alt="logo" />
        </header>
        <main className="App-body">

        	{ !this.state.feed ? <Loader /> : <Feed feed={this.state.feed} />}
        </main>
      </div>
    )
  }
}

export default App

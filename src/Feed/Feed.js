import React from 'react'
import './Feed.css'

import Photo from '../Photo/Photo'
//
const Feed = (props) => {
	let photos = props.feed.data.items.map( (item,ix) =>
		<Photo item={item} key={ix} />
	)
	return (
		<div className="Feed">{photos}</div>
	)
}

export default Feed

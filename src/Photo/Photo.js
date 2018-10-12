import React from 'react'
import './Photo.css'

// {
// 			"title": "IMG_7986 Streets Of Philadelphia",
// 			"link": "https:\/\/www.flickr.com\/photos\/focused40\/44828343012\/",
// 			"media": {"m":"https:\/\/farm2.staticflickr.com\/1912\/44828343012_3cbf09a25e_m.jpg"},
// 			"date_taken": "2007-05-06T12:53:55-08:00",
// 			"description": " <p><a href=\"https:\/\/www.flickr.com\/people\/focused40\/\">Cyberlens 40D<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/focused40\/44828343012\/\" title=\"IMG_7986 Streets Of Philadelphia\"><img src=\"https:\/\/farm2.staticflickr.com\/1912\/44828343012_3cbf09a25e_m.jpg\" width=\"202\" height=\"240\" alt=\"IMG_7986 Streets Of Philadelphia\" \/><\/a><\/p> <p>One of the many quaint streets around the center of the city.<br \/> ~<br \/> Copyright \u00a9 Gerardo Galindo<br \/> Contact: Cyberlens@aol.com<\/p>",
// 			"published": "2018-09-24T04:46:26Z",
// 			"author": "nobody@flickr.com (\"Cyberlens 40D\")",
// 			"author_id": "23804169@N07",
// 			"tags": "usa uscities philadelphia pa streets alleys travel destinations trees buildings urban sidewalks clean safe colorful"
// },
const flickrDescriptionIsNotADescription = (strHTML) => {
	var doc = new DOMParser().parseFromString(strHTML, 'text/html')
	return doc.body.lastChild.textContent || ""
}

const Photo = ({ item }) => {
	let tags = item.tags.split(' ').map( (t,ix) => <li><a href={`https://www.flickr.com/photos/tags/${t}`} key={ix}>{t}</a></li>)
	return (
		<div className="Photo">
			<div className="box">
				<figure>
					<img src={item.media.m} alt=""/>
					<figcaption>{item.title} by {item.author}</figcaption>
				</figure>
				<div class="description">{flickrDescriptionIsNotADescription(item.description)}</div>
				<footer><ul>{tags}</ul></footer>
			</div>
		</div>
	)
}

export default Photo
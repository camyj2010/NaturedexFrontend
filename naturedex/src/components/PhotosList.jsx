import React from 'react'
import PhotosListCSS from './PhotosList.module.css'
import Card from './Card'


export default function PhotosList() {
	return (
		<div className={PhotosListCSS.cardsContainer}>
			<Card name="Koala" image={'/exampleIMG.jpg'} />
			<Card name="Koala" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
			<Card name="Murcielago" image={'/exampleIMG.jpg'} />
		</div>
	)
}

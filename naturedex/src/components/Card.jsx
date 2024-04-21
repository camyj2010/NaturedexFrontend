import React from 'react'
import CardCSS from './Card.module.css'

export default function Card({ name, image }) {

	const colors = ['#618264', '#B0D9B1', '#79AC78'];

  // Selecciona un color aleatorio
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

	return (
		<div className={CardCSS.card} style={{ backgroundColor: randomColor }}>
			<p>{name}</p>
			<img src={image} alt={name} />
		</div>
	)
}

import React from 'react'
import CardCSS from './Card.module.css'
import Swal from 'sweetalert2';

export default function Card({ name, image, description }) {

	const colors = ['#618264', '#B0D9B1', '#79AC78'];

  // Selecciona un color aleatorio
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

	// Función que se ejecuta al hacer click en el card
	function handleClick() {
		Swal.fire({
			imageUrl: image,
			imageHeight: 200,
			title: name,
			text: description	
		})
	}

	return (
		<div className={CardCSS.card} style={{ backgroundColor: randomColor }} onClick={handleClick}>
			<p>{name}</p>
			<img src={image} alt={name} />
		</div>
	)
}

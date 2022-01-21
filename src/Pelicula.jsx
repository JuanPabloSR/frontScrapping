import React from 'react'

function Pelicula ({ pelicula }) {
  return (
    <>
      <div className='pelicula'>
        <span>{pelicula.nombrePelicula}</span>
        <p><strong>descripcion: </strong>{pelicula.descripcion}</p>
        <p><strong>fecha: </strong>{pelicula.fecha}</p>
        <p><strong>Genero: </strong>{pelicula.genero}</p>
        <p><strong>Duracion: </strong>{pelicula.duracion}</p>
        <a className='ver-pelicula' href={pelicula.url} target='_blank' rel='noreferrer'>Ver Pelicula</a>
      </div>
    </>
  )
}

export default Pelicula

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetail(props) {
    const location = useLocation()
    const movie = location.state
    console.log(location)
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{movie.titulo}</h1>
                    <ul>
                    {movie.actores.map((actor, index) => {
                        return <li>{actor}</li>
                    })}
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <img src={movie.portada} className='detail-movie-img' alt=''/>
                </div>
            </div>

            <div className='col'>
                <h2>Titulo de la pelicula</h2>
                <ul>
                    <li>Actores 1</li>
                    <li></li>
                </ul>
            </div>
        </div> 
    </>
  );
};

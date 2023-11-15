import {useEffect, useState} from 'react'
import CardComponent from '../../Components/Card/Card'
import { FaSpinner } from 'react-icons/fa6' 
import './ListaPeliculas.css'
import { Link } from 'react-router-dom'
import MovieDetail from '../PeliculaDetalle/MovieDetail'

export default function ListaPeliculas(props) {

    const [search, setSearch] = useState('')
    const [peliculas, setPeliculas] = useState([])
    const [peliculasFilter, setPeliculasFilter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
        fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
        .then(response => response.json())
        .then(data => {
            setPeliculas(data.peliculas);
            setPeliculasFilter(data.peliculas);
            setLoading(false)
        });
        }
    }, [])


    const handlerSearch = (e) => {
        if (e.target.value == '') {
            setPeliculasFilter(peliculas)
        } else {
            // console.log(e.target.value)
            setSearch(e.target.value) // actualiza el estado de search - guarda lo que escribí
            let pelisFilter = peliculas.filter((peli) => peli.titulo.toLowerCase().includes(search.toLocaleLowerCase()))
            setPeliculasFilter(pelisFilter)
        }

    }

    if (loading) {
        return (
            <div className='container2'>
                <FaSpinner className='spinner'/>
            </div>
        )
    } else {
        return (
            <>
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <input type="text" placeholder='Search movies' onChange={handlerSearch} />
                        </div>
        
                        <div className='row mt-5'>
                            {peliculasFilter.map((peli, index) => {
                            return (
                                <div className='col mt-5' key={index}>
                                    <Link to={`/${peli.genero}/${peli.titulo}`} state={peli}>
                                        <CardComponent title={peli.titulo} description={peli.sinopsis} img={peli.portada}/>
                                    </Link>
                                </div>
                            )
                        })}
                        </div>
                        {/* <div className='row'>
                            {data.map((peli) => {
                                return (
                                    <div className='col mt-5'>
                                        <CardComponent
                                            title={peli.title}
                                            description={peli.description}
                                            img={peli.img}
                                        />
                                    </div>
                                )
                            })}
                        </div> */}
                    </div>
                </div>
            </>
          )
    }

    // Conectarse a la API https://api.themoviedb.org/3/search/keyword?page=1&api_key=8c6c661c04b2b263ec982e55e19d3a76
/* 
     async function obtenerDatos() {
        let data = await fetch('https://api.themoviedb.org/3/search/movie?query=f1&include_adult=false&language=en-US&page=1&api_key=8c6c661c04b2b263ec982e55e19d3a76');
        let datos = await data.json();
        console.log(datos);
    }

    obtenerDatos(); */
/* 
let pelis = [
    {
        title: 'La verdad duele',
        description: 'Película de superheroe en NYC.',
        img: 'https://i.pinimg.com/originals/a9/5a/bf/a95abf08806d0683f6eb6a41e0ad7c13.png'
    },
    {
        title: 'La mentira duele',
        description: 'Película de terror.',
        img: 'https://i.pinimg.com/originals/a9/5a/bf/a95abf08806d0683f6eb6a41e0ad7c13.png'
    },
    {
        title: 'La verdad duele',
        description: 'Película de superheroe en NYC.',
        img: 'https://i.pinimg.com/originals/a9/5a/bf/a95abf08806d0683f6eb6a41e0ad7c13.png'
    },
    {
        title: 'Titanic',
        description: 'Película de terror.',
        img: 'https://i.pinimg.com/originals/a9/5a/bf/a95abf08806d0683f6eb6a41e0ad7c13.png'
    },
    {
        title: 'La verdad duele',
        description: 'Película de superheroe en NYC.',
        img: 'https://i.pinimg.com/originals/a9/5a/bf/a95abf08806d0683f6eb6a41e0ad7c13.png'
    }
] */

  
}


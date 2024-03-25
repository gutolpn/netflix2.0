import { useEffect } from 'react'
import './Row.css'
import {getData} from '../api'
import { useState } from 'react'

export default function Row({title, path, isLarge}) {
    const[filmes, setFilmes] = useState()
    let imageHost = 'https://image.tmdb.org/t/p/original/'

    let fetchData = async () => {

        let result = await getData(path)

        return result
    }

    useEffect( ()=>{

        let consulta = fetchData()
        
        consulta.then((data)=>{
            console.log(data?.results)
            setFilmes(data?.results)
        })


    }, [])

    return (
        <div className='row-container'>

            <h2 className='row-header'>{title}</h2>

            <div className='row-cards'>
                {filmes?.map( (filme) => {
                    
                    return (
                        <img
                        className={`movie-card ${isLarge && "movie-card-large"}` }
                        key={filme.id} 
                        src={imageHost + (isLarge?filme.backdrop_path:filme.poster_path)} 
                        alt={filme.name} >
                        </img>
                    )                
                })}
            </div>
        </div>
    )
}
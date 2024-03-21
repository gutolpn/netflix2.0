import { useEffect } from 'react'
import './Row.css'
import {getData} from '../api'
import { useState } from 'react'

export default function Row({title, path, isLarge}) {
    const[filmes, setFilmes] = useState()
    let image_host = 'https://image.tmdb.org/t/p/original/'

    let fetchData = async () => {

        let result = await getData(path)

        return result
    }

    useEffect( ()=>{

        let teste = fetchData()
        
        teste.then((data)=>{
            console.log(data?.results)
            setFilmes(data?.results)
        })


    }, [])

    return (
        <div className='teste'>            
            {title}

            <div className='imagens'>
                {filmes?.map( (filme) => {
                    let cl = isLarge?'large':'normal'
                    
                    return <img className={cl} key={filme?.id} src={image_host + filme?.backdrop_path}></img>
                })}
            </div>


        </div>
    )
}
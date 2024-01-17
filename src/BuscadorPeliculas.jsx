import { useState } from "react"

export const BuscadorPeliculas = () => {

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = 'c1215816c747b244c9fe928443f60a00'

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }

  const fetchPeliculas = async () => {
    try{
      const response = await fetch (`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
      const data = await response.json()
      setPeliculas(data)
    }catch(error){

    }
  }

  return (
    <div className="container">
        <h1 className="title">Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribí una película"
            value={busqueda}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">Buscar</button>
        </form>
    </div>
  )
}


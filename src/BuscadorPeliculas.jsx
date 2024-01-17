import { useState } from "react"

export const BuscadorPeliculas = () => {

  const urlBase = curl --request GET \
  --url 'https://api.themoviedb.org/3/search/movie'
  const API_KEY =

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
      const response = await fetch ('')

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


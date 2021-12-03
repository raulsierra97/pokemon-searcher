import './App.css';
import {useState} from "react"
import { getPokemon } from './services/getPokemon';

function Poke({pokemon, encontrado}) {
  console.log(pokemon)

  if(encontrado){
  return (
    <>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      <h4>Tipos: {pokemon.types.map((type1)=><strong key={type1.type.name}>{type1.type.name} </strong> )}</h4>
      <div>HP base: {pokemon.stats[0].base_stat}</div>
      <div>Ataque base: {pokemon.stats[1].base_stat}</div>
      <div>Defensa base: {pokemon.stats[2].base_stat}</div>
    </>
  )
  }
  else{
    return <h1>Introduzca pokemon</h1>
  }
}

function App() {
  const [newInput, setInput] = useState("")
  const [encontrado, setEncontrado] = useState(false)
  const [pokemon, setPokemon] = useState({})

  function handleSubmit(event){
    event.preventDefault()
    console.log(newInput)
    getPokemon(newInput.toLowerCase())
    .then((data) => {
      setPokemon(data)
      setEncontrado(true)
    })
    .catch( (error) => {
      console.log(error)
      setEncontrado(false)
    })
    
  }
  function handleChange(event){
    setInput(event.target.value)
  }
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>POKEMON STATS</h1>
        <form className="TitleSection" onSubmit={handleSubmit}>
          <input type="text" value={newInput} onChange={handleChange} ></input>
          <button>Buscar Pokemon</button>
        </form>
      </div>
      <div className="BodySection">
      <Poke pokemon={pokemon} encontrado={encontrado}/>
      </div>
    </div>
  )
}

export default App

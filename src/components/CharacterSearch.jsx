//Componentes para buscar personajes de la serie Rick And Morty por nombre con la API de Rick And Morty y mostrarlos en una lista
import React, {useState, useEffect, useRef} from "react";
import './CharacterSearch.css'

function CharacterSearch() {

    const [characters, setCharacters] = useState([]) // guardamos como lista
    const [error, setError] = useState('nuññ')
    // te guarda la referencia que esta buscando
    const searchInput = useRef()

    //Funcion para consumir la Api de RIck And Morty y traer los personajes por nombre
    const fetchCharacters = async (name) =>{
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
            const data = await response.json();
            setCharacters(data.results)
        }catch (eror){
            setError(erorr)
        }
    }

    
    // HANDLE para realizar la busqueda del personaje
    const handleSearch = () => {
        const name = searchInput.current.value;
        console.log(name);
        fetchCharacters(name)
    };
    // HANDLE para realizar la busqueda al presionar la tecla Enter
    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            handleSearch()        
        }
    };


  return (
    //input
    //boton de busqueda
    //contenero con cards
    //cards con informacion Personajes
    <div>
    <input type="text" placeholder="Buscar Personaje" 
        ref={searchInput}
        onKeyDown={handleKeyDown}
    />
    
    <button
    onClick={handleSearch}
    
    >
        Buscar 
    </button>
    <input type="checkbox"  placeholder="Vivo?"
        onChange={}
    />
    <div className="box-personaje">
    {/* Vamos a iterar sobre los personajes mapeados y traemos los atributo de cada uno (name,status,species,gender,image) */}
{characters.map((characters) => (
    <div className="card-personajes-container" 
    key={characters.id}>
        <div> 
            <img src={characters.image} alt="characters.name" />
        </div>
        <div>
        <h3>Nombre: {characters.name}</h3>
        <p>Estado: {characters.status}</p>
        <p>Especie: {characters.species}</p>
        <p>Genero: {characters.gender}</p>
        </div>
    </div>

))
}
    
    
</div>
    
    </div>

  )
}

export default CharacterSearch
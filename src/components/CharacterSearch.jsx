import React, { useState, useEffect, useRef } from "react";
import './CharacterSearch.css';
function CharacterSearch() {
  const [characters, setCharacters] = useState([]); // Guardamos los personajes en una lista
  const [error, setError] = useState(''); // Mensajes de error si ocurren
  const [isAlive, setIsAlive] = useState(false); // Estado para el checkbox (si el checkbox está marcado)
  const searchInput = useRef(); 

  // Función para consumir la API de Rick and Morty y traer los personajes por nombre
  const fetchCharacters = async (name, status) => {
    try {
      let url = `https://rickandmortyapi.com/api/character/?name=${name}`;
      if (status) {
        url += `&status=alive`; // Si el checkbox está marcado.
      }

      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      setError('Error al obtener personajes');
    }
  };

  // HANDLE para realizar la búsqueda del personaje
  const handleSearch = () => {
    const name = searchInput.current.value;
    fetchCharacters(name, isAlive); // Pasamos el estado de 'isAlive' para filtrar la búsqueda
  };

  // HANDLE para realizar la búsqueda al presionar la tecla Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // HANDLE para cambiar el estado del checkbox
  const handleCheckboxChange = () => {
    setIsAlive(!isAlive); // Cambia el estado cuando el checkbox es marcado/desmarcado
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar Personaje" 
        ref={searchInput} 
        onKeyDown={handleKeyDown} 
      />
      <label>
        <input 
          type="checkbox" 
          checked={isAlive} 
          onChange={handleCheckboxChange} 
        />
        Sólo vivos?
      </label>
      
      <button onClick={handleSearch}>
        Buscar
      </button>


      <div className="box-personaje">
        {/* Vamos a iterar sobre los personajes mapeados y traer los atributos de cada uno */}
        {characters.length > 0 ? (
          characters.map((character) => (
            <div className="card-personajes-container" key={character.id}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
                <h3>Nombre: {character.name}</h3>
                <p>Estado: {character.status}</p>
                <p>Especie: {character.species}</p>
                <p>Género: {character.gender}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron personajes.</p>
        )}
      </div>
    </div>
  );
}

export default CharacterSearch;

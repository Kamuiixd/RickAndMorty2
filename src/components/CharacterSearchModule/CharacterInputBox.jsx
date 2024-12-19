import React from 'react'

function CharacterInputBox({ onSearch }) {


    const searchInput = React.useRef();
    //HANDLE DE BUSQUEDA DE PERSONAJES  
    const handleSearch = () => {
        onSearch(searchInput.current.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Buscar Personaje"
                ref={searchInput}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleSearch}>
                Buscar
            </button>



        </div>
    )
}

export default CharacterInputBox
import React from 'react'

function CharacterPagination({ page, totalPages, onNext, onPrev }) {


    return (
        <div>
            <span>{page} de {totalPages}</span>
            <button onClick={onPrev} disabled={page === 1}>Anterior</button>
            <button onClick={onNext} disabled={page === totalPages}>Siguiente</button>

        </div>
    )
}

export default CharacterPagination
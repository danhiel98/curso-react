/**
 * Uso de state a través del hook useState
 */

import React, { useState } from 'react';

const State = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            Valor: <strong>{ contador }</strong><br />
            <button onClick={ () => setContador(contador + 1) }>Aumentar</button><br />
            <button onClick={ () => setContador(contador - 1) }>Disminuir</button><br />
            <button onClick={ () => setContador(0) }>Restablecer</button>
        </div>
    )
}

export default State;
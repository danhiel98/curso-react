/**
 * CodeSplitting permite descargar el codigo de los componentes solo cuando van a ser utilizados
 * Esto disminuye la carga de la red
 */

import React, { useState, Suspense } from 'react';

const CodeSplitting = () => {
    let [showSurprise, setShowSurprise] = useState(false);

    // Importar componente cuando es necesario
    const Surprise = React.lazy( () => import('./Surprise') );

    return (
        <div>
            <button onClick={ () => setShowSurprise(!showSurprise) }>{ showSurprise ? 'Ocultar' : 'Mostrar' }</button>
            { showSurprise && <Suspense fallback={ <p>Cargando...</p> }> <Surprise /> </Suspense> }
        </div>
    );
}

export default CodeSplitting;
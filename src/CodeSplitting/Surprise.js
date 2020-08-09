import React, { useEffect } from 'react';

const Surprise = () => {
    
    // Importar componente de manera dinámica (al cargar el componente)
    useEffect(() => {
        import('./Module').then(mod => mod.default());
    },[]);

    return (
        <div>
            <p>¡Sorpresa! <span role="img" aria-label="Party Popper">🎉</span></p>
        </div>
    );
}

export default Surprise;
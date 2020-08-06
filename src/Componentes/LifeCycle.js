/**
 * Desmostración del ciclo de vida de componentes funcionales utilizando el hook useEffect
 * 
 */

import React, { useEffect, useState } from 'react';

const Btn = () => {
    let [veces, setVeces] = useState(0);

    // Forma equivalente a componentDidMount() -> Cuando se inicializa el componente
    useEffect(() => {
        console.info(`El componente se ha cargado`);
    }, []);

    // Forma equivalente a componentDidUpdate() -> Cada vez que se actualiza el componente
    useEffect(() => {
        console.log(`Wow, algo pasó.`);
    });

    // Forma equivalente a componentWillUnmount() -> Cuando el componente será eliminado
    useEffect(() => {
        return () => console.warn(`Se acabó`);
    }, []);

    return (
        <div>
            <button onClick={ () =>  setVeces(veces + 1)}>Dar click ({veces})</button>
        </div>
    );
}

const LifeCycle = () => {
    let [show, setShow] = useState(true);

    return (
        <div>
            <div>
                { show && <Btn /> }
            </div>
            <button onClick={ () => setShow(false) }>Quitar</button>
        </div>
    )
}

export default LifeCycle;
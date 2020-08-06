/**
 * Componente funcional donde se utilizan props
 * Se utiliza destructuring para obtener los props específicos
 */

import React, { Component } from 'react';

let props = ({ nombre, edad = 0 }) => {
    let msg = edad >= 18 ? "eres mayor de edad" : "aún eres menor de edad";
    return <p>Saludos, {nombre}, {msg}</p>
}

// Asignar props por defecto a componente (en desuso)
props.defaultProps = {
    nombre: "desconocido",
}

export default props;
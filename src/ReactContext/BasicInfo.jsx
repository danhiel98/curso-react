import React, { useContext } from 'react'
import { FormContext } from './Form';

export default function BasicInfo() {
    const ctx = useContext(FormContext);

    return (
        <div>
            <label htmlFor="nombre">Nombres:</label>
            <input type="text" name="nombre" placeholder="Nombres" value={ ctx.name } onChange={ ev => ctx.setName(ev.target.value) } />
            <br/>
            <label htmlFor="apellido">Apellidos:</label>
            <input type="text" name="apellido" placeholder="Apellidos" value={ ctx.lastName } onChange={ ev => ctx.setLastName(ev.target.value) } />
        </div>
    )
}

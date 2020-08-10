import React, { useState } from 'react'
import BasicInfo from './BasicInfo';
import Skills from './Skills';

export const FormContext = React.createContext();

export default function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [skills, setSkills] = useState([]);

    return (
        <form>
            <FormContext.Provider value={ { name, setName, lastName, setLastName, skills, setSkills } }>
                <BasicInfo />
                <Skills />
                <br/>
                <strong>Datos:</strong><br/>
                <span>Nombres: { name }</span><br/>
                <span>Apellidos: { lastName }</span><br/>
                <span>Skills: { skills }</span>
            </FormContext.Provider>
        </form>
    )
}

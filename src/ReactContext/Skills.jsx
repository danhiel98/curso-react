import React, { useContext } from 'react'
import { FormContext } from './Form';

export default function Skills() {

    const ctx = useContext(FormContext);

    const addToList = value => {
        ctx.setSkills(ctx.skills.concat(value));
    }

    const removeFromList = value => {
        ctx.setSkills(ctx.skills.filter(e => e !== value));
    }

    return (
        <div>
            <label htmlFor="js">
                <input type="checkbox" name="skills[]" onClick={ ev => ev.target.checked ? addToList('javascript') : removeFromList('javascript') } />
                Javascript
            </label>
            &nbsp;
            <label htmlFor="php">
                <input type="checkbox" name="skills[]" onClick={ ev => ev.target.checked ? addToList('php') : removeFromList('php') } />
                PHP
            </label>
        </div>
    )
}

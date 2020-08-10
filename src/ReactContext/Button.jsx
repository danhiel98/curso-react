import React, { useContext } from 'react'
import { ThemeContext } from './Main';

export default function(props) {
    const context = useContext(ThemeContext);
    console.log(context);

    return (
        <div>
            <button style={ {
                backgroundColor: context.backgroundColor,
                color: context.color
            } }>
                Dar click
            </button>
        </div>
    )
}

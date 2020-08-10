import React, { useState } from 'react'
import Button from "./Button";

const themes = {
    'dark': {
        backgroundColor: 'black',
        color: 'white'
    },
    'light': {
        backgroundColor: 'white',
        color: 'black'
    }
}

export const ThemeContext = React.createContext();

export default function Main() {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
        <div>
            <ThemeContext.Provider value={ selectedTheme }>
                <Button />
                <br/>
                <button onClick={ () => setSelectedTheme(themes.dark) }>Dark</button>
                <button onClick={ () => setSelectedTheme(themes.light) }>Light</button>
            </ThemeContext.Provider>
        </div>
    )
}

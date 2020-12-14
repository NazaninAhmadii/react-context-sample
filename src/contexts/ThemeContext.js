import React from 'react';

export const theme = {
    ligth: {
        color: 'black',
        backgroundColor: 'white'
    },
    dark: {
        color: 'white',
        backgroundColor: 'black'
    }
}


export const ThemeContext = React.createContext(theme)


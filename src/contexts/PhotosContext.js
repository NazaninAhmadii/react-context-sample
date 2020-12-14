import React from 'react';

export const PhotoContext = React.createContext();

export const PhotoContextProvider = (props) => {
    const state = {
        photos: [
            {
                title: 'Lovely Grapes',
                imgSrc: './assets/grapes-3550729_640.jpg'
            },
            {
                title: 'Delicious Grapes',
                imgSrc: './assets/grapes-3550733_640.jpg'
            }
        ],
        fetchPhotos: async () => {
            const data = await fetch('https://restcountries.eu/rest/v2/all').then(res => res.json());
            return data;
        }
    }

    return (
        <PhotoContext.Provider value={state}>
            {props.children}
        </PhotoContext.Provider>
    )

}

export const PhotoContextConsumer = PhotoContext.Consumer;
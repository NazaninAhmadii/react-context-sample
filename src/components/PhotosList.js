import React, { useContext } from 'react';
import './photolist.css';
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../contexts/ThemeContext';
import { PhotoContextProvider, PhotoContextConsumer } from '../contexts/PhotosContext';


const styles = createUseStyles({
    imgStyle: {
        border: '1px solid green',
        borderRadius: '10px',
        width: '250px'
    },
    btn: {
        margin: '20px',
        padding: '0.5rem',
        border: '1px solid green',
        borderRadius: '10px',
    }

});

const PhotosList = () => {
    const classes = styles();
    const theme = useContext(ThemeContext);

    return (
        <PhotoContextProvider>
            <PhotoContextConsumer>
                {(value) =>
                    <div style={theme.dark} id="photos-list-container">
                        <ul id="photos-list">
                            {
                                value.photos.map((el, index) => (
                                    <li key={index}>
                                        <h3>{el.title}</h3>
                                        <img className={classes.imgStyle} src={el.imgSrc} alt="grapes" />
                                    </li>
                                ))
                            }
                        </ul>
                        <button className={classes.btn} style={theme === 'ligth' ? { color: 'white', backgroundColor: 'black' } : { color: 'black', backgroundColor: 'white' }} type="button">fetch photos</button>
                    </div>
                }
            </PhotoContextConsumer>
        </PhotoContextProvider >
    )
}

export default PhotosList;
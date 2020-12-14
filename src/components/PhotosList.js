import React, { useContext } from 'react';
import './photolist.css';
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../contexts/ThemeContext';


const styles = createUseStyles({
    container: {

    },
    imgStyle: {
        border: '1px solid green',
        borderRadius: '10px',
        width: '250px'
    }
});

const PhotosList = () => {
    const classes = styles();
    const theme = useContext(ThemeContext);

    return (
        <div style={theme.dark} id="photos-list-container">
            <ul id="photos-list">
                <li>
                    <h3>title</h3>
                    <img className={classes.imgStyle} src='./assets/grapes-3550729_640.jpg' alt="grapes" />
                </li>
            </ul>
        </div>
    )
}

export default PhotosList;
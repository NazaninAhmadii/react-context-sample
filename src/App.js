import React, { Component } from 'react';
import { theme, ThemeContext } from './contexts/ThemeContext';
import PhotosList from './components/PhotosList';
import './App.css';
import PhotoContext from './contexts/PhotosContext';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      photos: [
        {
          title: 'Lovely Grapes',
          imgSrc: '../public/assets/grapes-3550729_640.jpg'
        },
        {
          title: 'Delicious Grapes',
          imgSrc: '../public/assets/grapes-3550733_640.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={theme.ligth}>
        <PhotoContext.Provider value={this.state.photos}>
          <PhotosList />
        </PhotoContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;

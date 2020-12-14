import React, { Component } from 'react';
import { theme, ThemeContext } from './contexts/ThemeContext';
import PhotosList from './components/PhotosList';
import './App.css';
import PhotoContext from './contexts/PhotosContext';

class App extends Component {

  render() {
    return (
      <ThemeContext.Provider value={theme.ligth}>

        <PhotosList />

      </ThemeContext.Provider>
    );
  }
}

export default App;

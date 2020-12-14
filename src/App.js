import React, { Component } from 'react';
import { theme, ThemeContext } from './contexts/ThemeContext';
import PhotosList from './components/PhotosList';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={theme.ligth}>

        <div className="App">
          <PhotosList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

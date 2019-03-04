import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app!</h1>
        <Person name="Noah" age="25" />
        <Person name="Max" age="32">My hobbies: Racing</Person>
        <Person name="Manu" age="28" />
      </div>
    );
  }
}

export default App;

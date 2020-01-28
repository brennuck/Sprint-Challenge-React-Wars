import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [Character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data.results)
      setCharacter(res.data.results)
    })
    .catch(err => {
      console.log("Oops! There's an error.", err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {Character.map(character => {
        return (
          <Card
            name = {character.name}
            height = {character.height}
            mass = {character.mass}
            hair_color = {character.hair_color}
            skin_color = {character.skin_color}
            eye_color = {character.eye_color}
            birth_year = {character.birth_year}
            gender = {character.gender}
          />
        )})}
    </div>
  );
}

export default App;

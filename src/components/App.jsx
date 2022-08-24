import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
}

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

    render() {
      return (
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          <PokemonForm onSubmit={this.handleFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName}/>
          <ToastContainer autoClose={3000}/>
        </div>
      );
    }
}

export default App;
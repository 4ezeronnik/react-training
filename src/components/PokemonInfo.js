import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if (prevName !== nextName) {

            this.setState({ status: 'pending' });
           
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(new Error(`No pokemon with name ${nextName}`))
                })
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }
    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
           return <div>Please, enter name of pokemon</div>
        };

        if (status === 'pending') {
            return <PokemonPendingView pokemonName={pokemonName} />
        };

        if (status === 'rejected') {
             return <PokemonErrorView message={error.message} />
        };

        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon}/>
        }

    
    }
}
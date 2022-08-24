import { Component } from 'react';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if (prevName !== nextName) {
            console.log('Changed name of pokemon');

            this.setState({ loading: true });
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon })).finally(() => this.setState({ loading: false }));
        };
    }
    render() {
        return (<div>
            {this.state.loading && <div>Loading...</div>}
            {!this.props.pokemonName && <div>Please, enter name of pokemon</div>}
            {this.state.pokemon && <div>{this.state.pokemon.name}</div>} 
        </div>
        );
    }
}
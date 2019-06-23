import React, {Component} from 'react';
import './PokemonCard.css'

class PokemonCard extends Component {
	render(){
		const {id, name, type, exp} = this.props;
		return(
			<section className="PokemonCard-container">
				<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} />
				<section className="PokemonCard-stats">
					<p className="PokemonCard-type">Name: {name}</p>
					<p className="PokemonCard-experience">Experience: {exp}</p>
				</section>
			</section>
		)
	}
}

export default PokemonCard;
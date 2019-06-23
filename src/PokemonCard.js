import React, {Component} from 'react';
import './PokemonCard.css'

const API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class PokemonCard extends Component {
	render(){
		const {id, name, type, exp} = this.props;
		let imgSrc = `${API}${id}.png`;
		return(
			<section className="PokemonCard">
				<section>
					<h1 className="PokemonCard-name">{name}</h1>
					<img src={imgSrc} alt={name}/>
				</section>
				<section className="PokemonCard-stats">
					<p className="PokemonCard-type">Type: {type}</p>
					<p className="PokemonCard-experience">Exp: {exp}</p>
				</section>
			</section>
		)
	}
}

export default PokemonCard;
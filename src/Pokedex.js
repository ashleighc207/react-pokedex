import React, {Component} from 'react';
import './Pokedex.css'
import PokemonCard from './PokemonCard';

let pokeData = [
  {id: "004", name: 'Charmander', type: 'fire', base_experience: 62},
  {id: "007", name: 'Squirtle', type: 'water', base_experience: 63},
  {id: "011", name: 'Metapod', type: 'bug', base_experience: 72},
  {id: "012", name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: "025", name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: "039", name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: "094", name: 'Gengar', type: 'poison', base_experience: 225},
  {id: "133", name: 'Eevee', type: 'normal', base_experience: 65}
]

class Pokedex extends Component {
	render(){
		return(
			<section className="Pokedex-container">
				{pokeData.map(p => {
					return <PokemonCard
						id={p.id}
						key={p.id}
						name={p.name}
						type={p.type}
						exp={p.base_experience} 
					/>
				})}
			</section>
		)
	}
}

export default Pokedex;
import React, {Component} from 'react';
import './PokemonGameBoard.css';
import Pokedex from './Pokedex';

class PokemonGameBoard extends Component {
	static defaultProps = {
		pokemon: [
		  {id: "004", name: 'Charmander', type: 'fire', base_experience: 62},
		  {id: "007", name: 'Squirtle', type: 'water', base_experience: 63},
		  {id: "011", name: 'Metapod', type: 'bug', base_experience: 72},
		  {id: "012", name: 'Butterfree', type: 'flying', base_experience: 178},
		  {id: "025", name: 'Pikachu', type: 'electric', base_experience: 112},
		  {id: "039", name: 'Jigglypuff', type: 'normal', base_experience: 95},
		  {id: "094", name: 'Gengar', type: 'poison', base_experience: 225},
		  {id: "133", name: 'Eevee', type: 'normal', base_experience: 65}
		]
	}
	render(){
		let computer = [];
		let user = [...this.props.pokemon];
		
		while(computer.length < user.length){
			let randIdx = Math.floor(Math.random() * user.length);
			let randPokemon = user.splice(randIdx, 1)
			computer.push(randPokemon[0]);
		}

		let computerTotal = computer.reduce((exp, p) => exp + p.base_experience, 0)
		let userTotal = user.reduce((exp, p) => exp + p.base_experience, 0)


		return (
			<section className="PokemonGameBoard">
				<section className="PokemonGameBoard-hand">
					<h1>Computer's Hand</h1>
					<Pokedex 
						pokemon={computer} 
						totalexp={computerTotal} 
						isWinner={computerTotal > userTotal}
					/>
				</section>
				<section className="PokemonGameBoard-hand">
					<h1>Your Hand</h1>
					<Pokedex 
						pokemon={user} 
						totalexp={userTotal} 
						isWinner={userTotal > computerTotal}
					/>
				</section>
			</section>
		)
	}
}

export default PokemonGameBoard;
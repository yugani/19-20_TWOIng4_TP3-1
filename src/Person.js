import React, {Component} from 'react';
import Fiche from "./Fiche";
import Publi from ".Publi";
import './Person.css';

class Person extends React.Component 
{
	constructor(props) ///on définit les données des utilisateurs dans la constructeur car elles sont fixes
	{
		super(props);

		this.state = { profils: 
			[	
				{	
					id: 0,
					photo :"https://i.pinimg.com/originals/ae/76/10/ae7610003c67cc7957361d85182faadf.jpg",
					nom: "Minion1",
					prenom: "Bob",
					date_naissance: "L'an 0",
					background:"#64C2FF",
					publication : "Bello!",
					nbLike : 0,
				},

				{
					id: 1,
					photo: "https://vignette.wikia.nocookie.net/despicableme/images/1/1d/Kevin_minions.png/revision/latest?cb=20170703052012",
					nom: "Minion2",
					prenom: "Kevin",
					date_naissance:"L'an 1",
					background : "#64C2FF",
					publication : "Tatata-bala-tu!",
					nbLike : 0,
				},

				{	
					photo: "https://cdn.wallpapersafari.com/88/75/wTJUjm.jpg",
					id: 2,
					nom: "Minion3",
					prenom: "Stuart",
					date_naissance: "L'an 2",
					background : "#64C2FF",
					publication : "Bananonina",
					nbLike : 0,
				}
			],
			minion : 0
					};
	}

	handleChange(index) 
	{
		this.setState({minion: index}); //setState() ne peut pas être utiliser dans le render on crée donc la fonction handleChange
	}

	render() 
	{
		return(

	<div>

		<div>

		<button className = "Perso1" onClick={( ) => this.handleChange.bind(this)(0)}> {this.state.profils[0].prenom}</button>
		<button className = "Perso2" onClick={( ) => this.handleChange.bind(this)(1)}> {this.state.profils[1].prenom}</button>
		<button className = "Perso3" onClick={( ) => this.handleChange.bind(this)(2)}> {this.state.profils[2].prenom}</button>
		</div>

		<Fiche fiche = {this.state.profils[this.state.minion]}/>
		<Publi publi = {this.state.profils[this.state.minion]}/>

	</div>

		);
	}

}
export default Person;
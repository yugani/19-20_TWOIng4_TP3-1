import React, {Component} from 'react';
import './Fiche.css';

class Fiche extends Component
{	
	constructor(props)
	{
		super(props);
	}

	handleColorChange(index)
	{
		if(this.props.fiche.background=="#F1C40F") 
		{
			this.props.fiche.background="#64C2FF";
			this.setState({minion: index});
		}
		else 
		{
			this.props.fiche.background="#F1C40F";
			this.setState({minion: index});
		}
	}
	
	render()
	{
		return(

			<div className="FicheUsers" style={{backgroundColor: this.props.fiche.background}}>

				<div className="Profil-infos">
					<img src={this.props.fiche.photo}/>
				</div>

				<div className="Prenom">
					{this.props.fiche.prenom}
				</div>

				<div className="Nom">
					{this.props.fiche.nom}
				</div>
			
				<div className="Date_naissance">
					{this.props.fiche.date_naissance}
				</div>

				<div className="Changer-style">
					<button onClick={( ) => this.handleColorChange(this.props.fiche.id)}>
					Change style 
					</button>
				</div>
			</div> )
	}

}
export default Fiche;
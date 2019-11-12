import React, {Component} from 'react';
import "./Publi.css";

class Publi extends React.Component 
{
	constructor(props)
	{
		super(props);	
	}

	handleLikeAdd(index)
	{
		this.props.publi.nbLike=this.props.publi.nbLike+1;
		this.setState({minion: index});
	}

	render()
	{
		return(

		<div className="ContainerPublication">

			<h2>Dernière Publication</h2>

		<div className="Publication">
			
			<div className="Text">
			{this.props.publi.publication}
			</div>

			<button className="LikeAffichage" onClick={( ) => this.handleLikeAdd(this.props.publi.id) }>
			<h3>+1 Like</h3>
			<p>
			<div className="Like"> 
			{this.props.publi.nbLike} 
			</div> 
			</p>
			</button> 

		</div>

		</div> )
	}
}
export default Publi;
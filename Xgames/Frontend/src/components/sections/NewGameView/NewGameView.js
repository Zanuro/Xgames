import React, {Fragment} from 'react';
import classes from './NewGameView.module.css';

export default class NewGameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      
            title: '',
            text: '',
            price: '',
            gen: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    render() {
      
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Nombre Juego
                <input className={classes.inputs} type="text" value={this.state.title} onChange={this.handleChange} width="50%"/>    
                Descripción Juego
                <textarea value={this.state.text} onChange={this.handleChange} /> 
                Precio Juego
                <textarea value={this.state.price} onChange={this.handleChange} /> 
                Género Juego
                <select value={this.state.genero} onChange={this.handleChange}>            
                    <option value="Conducción">Conducción</option>
                    <option value="Aventuras">Aventuras</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Terror">Terror</option>
                </select>  
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }
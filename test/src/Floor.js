import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

// Création de la class React

class Floor extends Component {

    // Constructeur et inisialisation d'un state.
    constructor(props) {
        super(props);
        this.state = {
            floor: 0,
        }
    }

    // FONCTION goUp POUR MONTER
    goUp = () => {
        // Si l'étage est inferieur à 10 alors on peut monter
        if(this.state.floor < 12){
            this.setState({ floor: this.state.floor + 1, message: null })
        }
        else{
            this.setState({ message: ' - You are at the last floor' })
        }

    }

    goDown = () => {
        // FONCTION goDown POUR DESCENDRE   
        if (this.state.floor > -3){
            this.setState({ floor: this.state.floor - 1, message: null })
        }
        else {
            this.setState({ message : ' - You are at the last floor' })
        }

    }

    // RENDER
    render() {
        return (
            <div className="button">
                <div className='floor'>{this.state.floor}{this.state.message}</div>
                <br/>
                <Button onClick={this.goUp} color="primary" >
                UP
                </Button>
                <Button onClick={this.goDown} color="secondary" >
                DOWN
                </Button>
            </div>
        )
    }
}

export default Floor;
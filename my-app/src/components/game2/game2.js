import React, { Component } from "react";
import game3 from "../game3";
import game from "../../game.json";
import game1 from "../game1";

class Game extends Component {
    state = {        game,
        score : 0,
        topScore: 0
    };
    
    handleClick = id => {
        let doubleClicked = false;

        let update = {
            pokemons: [...this.state.game], 
            score: this.state.score,
            topScore: this.state.topScore
        };

        update.game.forEach(game => {
            if (game.id === id) {
                if (game.clicked === true) { 
                    doubleClicked = true;
                };

                game.clicked = true;
                update.score++;

                if (update.score > update.topScore) {
                    update.topScore = update.score;
                };
            }
        })

        if (doubleClicked === true) { 
            update.game.forEach(pokemon => game.clicked = false) 
            update.score = 0; 
        };

   
        update.game = update.game.sort(() => 0.5 - Math.random()); 

        this.setState({
            game: update.game,
            score: update.score,
            topScore: update.topScore
        });
    }

    render(){
        return(
            <div className = "Games"> 
                <game3 score={this.state.score} topScore={this.state.topScore} />
                <game1 image = {this.state.game[1].image} />
            </div>
        )
    }

}

export default game2;
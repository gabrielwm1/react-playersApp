import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "gabe"
                },
                {
                    name: "Melisa"
                }
            ]
        };
    }

    handleAddPlayer = name => {
       console.log(name)
        // let { prevPlayerId } = this.state;
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                    }
                ]
            };
        });
    };

    render() {
        return (
            <div className="ui container comments">
                {this.state.players.map(player => (
                    <CommentDetail
                        name={player.name}
                        key={player.name}
                    />
                ))}
                
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

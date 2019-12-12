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
                    name: "gabe",
                    id: 1
                },
                {
                    name: "Melisa",
                    id: 2
                }
            ]
        };
    }

    handleAddPlayer = name => {
        // let { prevPlayerId } = this.state;
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: (this.prevPlayerId += 1)
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
                        key={player.id.toString()}
                    />
                ))}
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

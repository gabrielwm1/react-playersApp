import React, { Component } from "react";
// import PropTypes from "prop-types";
class AddPlayerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    // static propTypes = {
    //     addPlayer: PropTypes.func
    // };
    // playerInput = React.createRef();
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value: ""});
        console.log("test");
      }
    // handleSubmit = () => {
    //     console.log("test");
    
    //     // console.log(this.playerInput.current.value);
    //     // console.log(this.props);
    //     // console.log(e);
    //     // e.currentTarget.reset();
    // };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                            <button className="ui button" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddPlayerForm;

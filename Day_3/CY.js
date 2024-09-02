import React, { Component } from 'react';

class UserInputDisplay extends Component {
    constructor(props) {
        super(props);
        // Initial state
        this.state = {
            userInput: '',    // State to store the current input value
            displayedValue: '' // State to store the value to be displayed
        };
    }

    // Handler to update the input value
    handleInputChange = (event) => {
        this.setState({ userInput: event.target.value });
    };

    // Handler to update the displayed value
    handleSubmit = () => {
        this.setState({ displayedValue: this.state.userInput });
    };

    render() {
        return (
            <div>
                <h1>Enter Your Name</h1>
                <input
                    type="text"
                    placeholder="Type your name"
                    value={this.state.userInput}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleSubmit}>Submit</button>
                <br />
                <h1>WEATHER APPLICATION</h1>
                <h2> Current Weather: {this.state.displayedValue}</h2>
                 <p>Temperature: 20 {'\u00b0'}C</p><br></br>
                 <p>Condition:Sunny</p>
            </div>
        );
    }
}

export default UserInputDisplay;

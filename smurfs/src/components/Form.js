import React from 'react';
import axios from 'axios';


class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    addSmurf = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', e.target.value)
            .then(res => {
                const newSmurf = this.state;
                this.addSmurf(newSmurf);
                this.setState({
                    name: '',
                    age: '',
                    height: ''
                })
            })
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    render() {
        return (
            <form onSubmit={this.addSmurf}>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="smurf_name" />
                </div>
                <div>
                    <label for="age">Age:</label>
                    <input type="text" id="age" name="smurf_age" />
                </div>
                <div>
                    <label for="height">Height:</label>
                    <input type="text" id="height" name="smurf_height" />
                </div>
                <div>
                    <button type="submit">Add Smurf</button>
                </div>
            </form>
        )
    }
}

export default Form;
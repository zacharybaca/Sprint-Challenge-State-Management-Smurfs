import React from 'react';
import axios from 'axios';
import {addSmurf} from '../actions';
import { connect } from 'react-redux';


class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    addSmurf = (e) => {
        e.preventDefault();
        const newSmurf = this.state;
                this.addSmurf(newSmurf);
                this.setState({
                    name: '',
                    age: '',
                    height: ''
        })
    }

    submitToForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', e.target.value)
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    render() {
        return (
            <form onSubmit={this.addSmurf}>
                <div>
                    <label for="name">Name:</label>
                    <input 
                        onChange={this.handleInput}
                        placeholder="Name"
                        value={this.state.name}
                        name="name"
                    />
                </div>
                <div>
                    <label for="age">Age:</label>
                    <input 
                        onChange={this.handleInput}
                        placeholder="Age"
                        value={this.state.age}
                        name="age"
                    />
                </div>
                <div>
                    <label for="height">Height:</label>
                    <input
                        onChange={this.handleInput}
                        placeholder="Height"
                        value={this.state.height}
                        name="height"
                    />
                </div>
                <div>
                    <button type="submit" onClick={this.submitToForm}>Add Smurf</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(Form)
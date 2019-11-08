import React from 'react';
import {addSmurf} from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';


const CustomForm = styled.form`
    background-color: blue;
    border: 3px solid blue;
    width: 400px;
`

const CustomDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid black;
    padding: 50px;
`

const CustomImage = styled.img`
    width: 100px;
`

class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    addNewSmurf = (e) => {
        e.preventDefault();
        const newSmurf = this.state
        this.props.addSmurf(newSmurf)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    
    render() {
        return (
            <CustomDiv>
                <CustomImage src="https://cdn.vox-cdn.com/thumbor/MlY1bN3C1Vm_yr08FcbWkoq-U-0=/0x0:2560x1600/920x613/filters:focal(1662x443:2070x851):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg" alt="smurfs" />
                <CustomForm onSubmit={this.addNewSmurf}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            onChange={this.handleInput}
                            placeholder="Name"
                            value={this.state.name}
                            name="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input 
                            onChange={this.handleInput}
                            placeholder="Age"
                            value={this.state.age}
                            name="age"
                        />
                    </div>
                    <div>
                        <label htmlFor="height">Height:</label>
                        <input
                            onChange={this.handleInput}
                            placeholder="Height"
                            value={this.state.height}
                            name="height"
                        />
                    </div>
                    <div>
                        <button type="submit" >Add Smurf</button>
                    </div>
                </CustomForm>
            </CustomDiv>
        )
    }
}

const mapStateToProps = state => {
    return {}

}

export default connect(
    mapStateToProps,
    { addSmurf }
)(Form)
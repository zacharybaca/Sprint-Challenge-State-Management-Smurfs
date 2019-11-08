import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid black;
    background-color: blue;
`

const CustomHeader = styled.h1`
    text-decoration: underline;
`

const Smurf = (props) => {
    return (
        <Card>
            <CustomHeader>{props.smurf.name}</CustomHeader>
            <p>Age:{props.smurf.age}</p>
            <p>Height:{props.smurf.height}</p>
        </Card>
    )
}

export default Smurf;
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid black;
`

const Smurf = (props) => {
    return (
        <Card>
            <p>Name:{props.smurf.name}</p>
            <p>Age:{props.smurf.age}</p>
            <p>Height:{props.smurf.height}</p>
        </Card>
    )
}

export default Smurf;
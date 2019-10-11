import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

import Smurf from './Smurf';

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    if (props.isFetching) {
        return <h2>Loading Smurfs....</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(smurf => (
                <Smurf smurf={smurf}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(Smurfs);
import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data }));
};

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF })
        console.log(newSmurf);
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_FAILED, payload: err })
        })
}
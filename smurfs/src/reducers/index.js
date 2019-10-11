import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, ADD_SUCCESS, ADD_FAILED } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_SMURF:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case ADD_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case ADD_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
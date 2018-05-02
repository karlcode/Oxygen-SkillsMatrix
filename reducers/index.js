import { combineReducers } from 'redux';
import { SEARCH_TERM } from '../actions';

let initialState = { data: [], 
                    filteredData: [], 
                    isFetching: true, 
                };  

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TERM:{
            state = Object.assign({}, state, { data: action.data, loading:false, refreshing: false });
            return state;
        }
        default:
            return state
        
    }
};

const rootReducer = combineReducers({
    dataReducer,
})

export default rootReducer;
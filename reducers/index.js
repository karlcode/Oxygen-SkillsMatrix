import { combineReducers } from 'redux';
import { FETCHING_DATA, DATA_AVAILABLE, SEARCH_TERM, SELECT_CONFIRM, SELECT_DELETE, APPLY_FILTER } from '../actions';

let initialState = { data: [], 
                    filteredData: [], 
                    users: [],
                    isFetching: true,
                    locations: [{
                        name: 'Sydney',
                        isSelected: false,
                        value: 1,
                        type: 'location'
                      }, {
                        name: 'Melbourne',
                        isSelected: false,
                        value: 2,
                        type: 'location'
                      }, {
                        name: 'Brisbane',
                        isSelected: false,
                        value: 3,
                        type: 'location'
                      }, {
                        name: 'Adelaide',
                        isSelected: false,
                        value: 4,
                        type: 'location'
                      }, {
                        name: 'Perth',
                        isSelected: false,
                        value: 5,
                        type: 'location'
                      },{
                        name: 'Hobart',
                        isSelected: false,
                        value: 6,
                        type: 'location'
                      },{
                        name: 'Wellington',
                        isSelected: false,
                        value: 7,
                        type: 'location'
                      },{
                        name: 'Christchurch',
                        isSelected: false,
                        value: 8,
                        type: 'location'
                      },{
                        name: 'Auckland',
                        isSelected: false,
                        value: 9,
                        type: 'location'
                      }],
                    skills: [{
                        name: '.Net',
                        isSelected: false,
                        value: 1,
                        type: 'skill'
                      }, {
                        name: 'ABAP',
                        isSelected: false,
                        value: 2,
                        type: 'skill'
                      }, {
                        name: 'S/4 Hana Migration',
                        isSelected: false,
                        value: 3,
                        type: 'skill'
                      }, {
                        name: 'Microsoft Sharepoint',
                        isSelected: false,
                        value: 4,
                        type: 'skill'
                      }, {
                        name: 'IBM Websphere',
                        isSelected: false,
                        value: 5,
                        type: 'skill'
                      },{
                        name: 'HANA Security',
                        isSelected: false,
                        value: 6,
                        type: 'skill'
                      },{
                        name: 'SAP Mobile Platform',
                        isSelected: false,
                        value: 7,
                        type: 'skill'
                      },{
                        name: 'Screen Personas',
                        isSelected: false,
                        value: 8,
                        type: 'skill'
                      }],
                };  

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:{
            state = Object.assign({}, state);
            return state;
        }
        case DATA_AVAILABLE:{
            state = Object.assign({}, state, { users: action.payload.data, loading:false, refreshing: false })
            return state;
        }
        case SEARCH_TERM:{
            state = Object.assign({}, state, { data: action.data, loading:false, refreshing: false });
            return state;
        }
        case SELECT_CONFIRM:{
            if(action.list[0].type == 'location'){
                const index = action.list[0].value;
                return { 
                    ...state, 
                    locations: state.locations.map(
                        (location, i) => location.value === index ? {...location, isSelected: !location.isSelected}
                                                : location
                    )
                 }
            }
            else if (action.list[0].type == 'skill'){
                const index = action.list[0].value;
                return { 
                    ...state, 
                    skills: state.skills.map(
                        (skill, i) => skill.value === index ? {...skill, isSelected: !skill.isSelected}
                                                : skill
                    )
                 }
            }

        }
        case SELECT_DELETE:{
            if(action.item.type == 'location'){
                const index = action.item.value;
                return { 
                    ...state, 
                    locations: state.locations.map(
                        (location, i) => location.value === index ? {...location, isSelected: !location.isSelected}
                                                : location
                    )
                 }
            }
            else if (action.item.type == 'skill'){
                const index = action.item.value;
                return { 
                    ...state, 
                    skills: state.skills.map(
                        (skill, i) => skill.value === index ? {...skill, isSelected: !skill.isSelected}
                                                : skill
                    )
                 }
            }
        }
        case APPLY_FILTER: {
            console.log("APPLY FILTER")
            //map selected items to the filter search function
        }
        default:
            return state
        
    }
};

const rootReducer = combineReducers({
    dataReducer,
})

export default rootReducer;
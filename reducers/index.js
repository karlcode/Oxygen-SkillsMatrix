import { combineReducers } from 'redux';
import { FETCHING_DATA, DATA_AVAILABLE, SKILLS_AVAILABLE, USERSKILLS_AVAILABLE, UPDATE_SKILL, CREATE_SKILL, DELETE_SKILL, PROFILE_AVAILABLE, SEARCH_TERM, CLEAR_SEARCH, SELECT_CONFIRM, SELECT_DELETE, APPLY_FILTER, CLEAR_FILTER, CSRF_TOKEN } from '../actions';

import SearchInput, { createFilter } from 'react-native-search-filter'

let initialState = { data: [],
                    skillgroups: [], 
                    filteredData: [], 
                    users: [], 
                    userSkills: [],
                    backup: [],
                    profile: [],
                    token: '',
                    cleared: true,
                    isFetching: true,
                    showFilter: false,
                    
                };  

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:{
            state = Object.assign({}, state);
            return state;
        }
        case DATA_AVAILABLE:{
            state = Object.assign({}, state, { users: action.payload, backup: action.payload, loading:false, refreshing: false })
            return state;
        }
        case SKILLS_AVAILABLE:{
          state = Object.assign({}, state, { skillgroups: action.skills })
          return state;
        }
        case USERSKILLS_AVAILABLE:{
            state = Object.assign({}, state, { userSkills: action.userSkills })
            return state;
        }
        case CREATE_SKILL:{
            alert("New Skill created")
            state = Object.assign({}, state)
            return state;
        }
        case UPDATE_SKILL:{
            alert("Skills updated")
            state = Object.assign({}, state)
            return state;
        }
        case DELETE_SKILL:{
            alert("Skill deleted")
            state = Object.assign({}, state)
            return state;
        }
        case PROFILE_AVAILABLE:{
          state = Object.assign({}, state, { profile: action.profile })
          return state;
        }
        case SEARCH_TERM:{
            const filtered = state.users.filter(createFilter(action.searchterm, ['FirstName', 'LastName', 'Phone', 'Nationality', 'Position.Name', 'Team.Name', 'Location.Description','Location.Code' ]))
            state = Object.assign({}, state, { filteredData: filtered, cleared: false });
            return state;
        }
        case CLEAR_SEARCH:{
          state = Object.assign({}, state, { cleared: true });
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
        case CLEAR_FILTER: {
          console.log("CLEARED")
          console.log(state.backup)
            state = Object.assign({}, state, { users: state.backup, showFilter: false })
            return state;
        }
        case APPLY_FILTER: {
            console.log(action.filters)
            let results = state.users.filter(el => 
              action.filters.position != "All" && el.position.includes(action.filters.position) || 
              action.filters.location != "All" && el.location.includes(action.filters.location) ||
              action.filters.clearance != "All" && el.clearance.includes(action.filters.clearance) ||
              action.filters.banding != "All" && el.banding.includes(action.filters.banding) ||
              action.filters.citizenship != "All" && el.citizenship.includes(action.filters.citizenship) ||
              action.filters.team != "All" && el.team.includes(action.filters.team)
              )
            state = Object.assign({}, state, { users: results, showFilter: true })
            return state;
        }
        case CSRF_TOKEN: {
          state = Object.assign({}, state, { token: action.token })
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
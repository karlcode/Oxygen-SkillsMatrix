export const SELECT_CONFIRM = 'SELECT_CONFIRM';
export const SELECT_DELETE = 'SELECT_DELETE';
export const APPLY_FILTER = 'APPLY_FILTER';
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SKILLS_AVAILABLE = 'SKILLS_AVAILABLE';
export const USERSKILLS_AVAILABLE = 'USERSKILLS_AVAILABLE';
export const PROFILE_AVAILABLE = 'PROFILE_AVAILABLE';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const CSRF_TOKEN = 'CSRF_TOKEN';
export const SEARCH_TERM = 'SEARCH_TERM';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

var base64 = require('base-64');


export function searchTerm(e){
    return (dispatch) => {
        dispatch({type: SEARCH_TERM, searchterm: e});
    };
}
export function clearSearch(){
    return (dispatch) => {
        dispatch({type: CLEAR_SEARCH});
    };
}
export function getData(){
    return (dispatch) => {
        dispatch({type: FETCHING_DATA});
        //fetch('https://api.myjson.com/bins/1441f2')
        let headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode("oxygen:Welcome1"))
        headers.append("X-CSRF-Token", "fetch")
        let url = 'https://iottruck.oxygendemo.com/sap/opu/odata/sap/ZSKILLS_MATRIX_SRV/EmployeeSet?$format=json&$expand=EmployeeSkillSet/Skill/SkillGroup,Team,Location,Position'
        fetch(url, {
            headers: headers,
            method: 'GET'
          })
        .then(res => {
            const xcsrf = res.headers.get("X-CSRF-Token")
            dispatch({type: CSRF_TOKEN, token: xcsrf});
            return res.json()})
        .then(json => {
            dispatch({type: DATA_AVAILABLE, payload: json.d.results});
        })
        .catch(error => {
            alert("Error populating consultant list "+ error)
            console.log(error)
        })
    };
}

export function getSkills(){
    return (dispatch) => {
        //dispatch({type: FETCHING_DATA});
        let headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode("oxygen:Welcome1"))
        headers.append("X-CSRF-Token", "fetch")
        let url = 'https://iottruck.oxygendemo.com/sap/opu/odata/sap/ZSKILLS_MATRIX_SRV/SkillGroupSet?$format=json&$expand=SkillSet/EmployeeSkillSet/SkillRank'
        fetch(url, {
            headers: headers,
            method: 'GET'
          })
        .then(res => res.json())
        .then(json => {
            //dispatch({type: SKILLS_AVAILABLE, profile: json.d, skills: json.d.EmployeeSkillSet});
            dispatch({type: SKILLS_AVAILABLE, skills: json.d.results});
        })
        .catch(error => {
            alert("Error fetching skill groups " + error)
            console.log(error)
        })
    };
}
export function getUserSkills(){
    return (dispatch) => {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode("oxygen:Welcome1"))
        headers.append("X-CSRF-Token", "fetch")
        let url = 'https://iottruck.oxygendemo.com/sap/opu/odata/sap/ZSKILLS_MATRIX_SRV/EmployeeSkillSet?$format=json&$expand=Skill,SkillRank&$filter=EmployeeId%20eq%20\'3\''
        fetch(url, {
            headers: headers,
            method: 'GET'
          })
        .then(res => res.json())
        .then(json => {
            dispatch({type: USERSKILLS_AVAILABLE, userSkills: json.d.results});
        })
        .catch(error => {
            alert("Error fetching userSkill groups " + error)
            console.log(error)
        })
    };
}
export function getProfile(){
    return (dispatch) => {
        //dispatch({type: FETCHING_DATA});
        let headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode("oxygen:Welcome1"))
        headers.append("X-CSRF-Token", "fetch")
        let url = 'https://iottruck.oxygendemo.com/sap/opu/odata/sap/ZSKILLS_MATRIX_SRV/EmployeeSet(\'3\')?$format=json&$expand=Team%2cPosition%2cLocation%2cEmployeeSkillSet%2cEmployeeSkillSet%2fSkillPriority%2cEmployeeSkillSet%2fSkill%2cEmployeeSkillSet%2fSkill%2fSkillGroup%2fSkillSet'
        fetch(url, {
            headers: headers,
            method: 'GET'
          })
        .then(res => res.json())
        .then(json => {
            dispatch({type: PROFILE_AVAILABLE, profile: json.d});
        })
        .catch(error => {
            alert("Error fetching skill groups " + error)
            console.log(error)
        })
    };
}

export function selectConfirm(list){
    return (dispatch) => {
        dispatch({type: SELECT_CONFIRM, list: list});
    };
}

export function selectDelete(item){
    console.log(item)
    return (dispatch) => {
        dispatch({type: SELECT_DELETE, item: item});
    };
}
export function applyFilter(filters){
    return (dispatch) => {
        dispatch({type: APPLY_FILTER, filters: filters});
    };
}
export function clearFilter(){
    return (dispatch) => {
        dispatch({type: CLEAR_FILTER});
    };
}
export const SEARCH_TERM = 'SEARCH_TERM';
export const SELECT_CONFIRM = 'SELECT_CONFIRM';
export const SELECT_DELETE = 'SELECT_DELETE';
export const APPLY_FILTER = 'APPLY_FILTER';
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export function getData(){
    console.log("HGT")
    return (dispatch) => {
        dispatch({type: FETCHING_DATA});
        fetch('https://api.myjson.com/bins/1540xy')
        .then(res => res.json())
        .then(json => {
            dispatch({type: DATA_AVAILABLE, payload: json});
            console.log("FETCHED THE DATA");
        })
        .catch(error => {
            //dispatch error
        })
    };
}
export function searchTerm(e){
    console.log(e);
    return (dispatch) => {
        dispatch({type: SEARCH_TERM, data: e});
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
export function applyFilter(){
    return (dispatch) => {
        dispatch({type: APPLY_FILTER});
    };
}

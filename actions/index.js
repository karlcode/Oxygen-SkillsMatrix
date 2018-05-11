export const SEARCH_TERM = 'SEARCH_TERM';
export const SELECT_CONFIRM = 'SELECT_CONFIRM';
export const SELECT_DELETE = 'SELECT_DELETE';
export const APPLY_FILTER = 'APPLY_FILTER';
export const GET_DATA = 'GET_DATA';

export function getData(){
    //fetch and use redux thunk 
    return (dispatch) => {
        dispatch({type: GET_DATA});
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

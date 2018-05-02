export const SEARCH_TERM = 'SEARCH_TERM';

export function searchTerm(e){
    console.log(e);
    return (dispatch) => {
        dispatch({type: SEARCH_TERM, data: e});
    };
}

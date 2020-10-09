export const setUserDetail = (name, value) => dispatch => {
    dispatch({
        type : "ADD_DETAIL",
        payload : { name , value }
    })
}

export const submitUserDetail = () => dispatch => {
    dispatch({
        type : "SUBMIT_USER"
    })
}
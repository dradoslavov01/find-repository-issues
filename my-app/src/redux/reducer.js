
//state
const INITIAL_STATE = {
    issues: null,
    comments: null
};


//types
const SET_ISSUES = "SET_ISSUES";
const SET_COMMENTS = "SET_COMMENTS";

//actions
export const setIssues = (payload) => {
    return {
        type: SET_ISSUES,
        payload
    };
};
export const setComments = (payload) => {
    return {
        type: SET_COMMENTS,
        payload
    };
};

//reducer
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ISSUES:
            return {
                ...state,
                issues: action.payload
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    };
};

export default reducer;
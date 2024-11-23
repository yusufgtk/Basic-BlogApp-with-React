const initialState = [];

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_CATEGORİES":
            return [...action.payload.categories];
        case "GET_CATEGORY":
            return [...action.payload.categories];
        default:
            return state;
    }
}

export default CategoryReducer
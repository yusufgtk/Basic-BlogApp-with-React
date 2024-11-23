const initialState = {
    blogs:[],
    selectedMyBlog:{}
};

const MyBlogsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_MY_BLOGS":
            return {...state, blogs:action.payload.blogs};
        case "DELETE_MY_BLOG":
            return {
                ...state,
                blogs:state.blogs.filter(b=>b.id !== action.payload.blog.id)
            }
        case "SELECTED_MY_BLOG":
            return  {...state, selectedMyBlog: action.payload.blog};
        default:
            return state;
    }
}

export default MyBlogsReducer
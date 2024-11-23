const initialState = {
    blogs: [],
    selectedBlog: {},  // Seçilen blogu tutan state
};

const BlogReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_BLOGS":
            return { ...state, blogs: action.payload.blogs };
        case "GET_BLOGS_BY_CATEGORY_ID":
            return { ...state, blogs: action.payload.blogs };
        case "ADD_BLOG":
            return { ...state, blogs: [...state.blogs, action.payload.blogs] };
        case "SELECTED_BLOG":
            return { ...state, selectedBlog: action.payload.blog };  // Seçilen blogu burada tutuyoruz
        default:
            return state;
    }
};

export default BlogReducer
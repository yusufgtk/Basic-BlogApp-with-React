
export const getMyBlogs = (userName) => {
    return async (dispatch) => {
        try {
            if(userName){
                var response = await fetch(`http://localhost:3000/blogs?userName=${userName}`);
                var blogs = await response.json();
                dispatch({
                    type:"GET_MY_BLOGS",
                    payload:{
                        blogs:blogs
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteMyBlog = (blog) => {
    return async (dispatch) => {
        try {
            const requestObj = {
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/josn'
                }
            }
            var response = await fetch(`http://localhost:3000/blogs/${blog.id}`,requestObj);
            if(!response.ok){
                return false;
            }
            dispatch({
                type:"DELETE_MY_BLOG",
                payload:{
                    blog:blog
                }
            })
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

export const editBlog = (blog,id) => {
    return async (dispatch) => {
        try {
            const requestObj = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            };
            const response = await fetch(`http://localhost:3000/blogs/${id}`, requestObj);
            const result = await response.json();
            console.log("Yanıt kodu:", response.status);
            console.log("Yanıt içeriği:", result);
            if(!response.ok){
                return false;
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

export const selectedMyBlog = (blogId) => {
    return async (dispatch) => {
        try {
            var response = await fetch(`http://localhost:3000/blogs?id=${blogId}`);
            var blogs = await response.json();
            dispatch({
                type:"SELECTED_MY_BLOG",
                payload:{
                    blog:blogs[0]
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}
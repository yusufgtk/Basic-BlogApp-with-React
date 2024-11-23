import { v4 as uuid } from 'uuid';

export const getBlogs = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3000/blogs");
            const data = await response.json();
    
            dispatch({
                type: "GET_BLOGS",
                payload: {
                    blogs: data
                },
            });
        } catch (err) {
          console.error("Error fetching blogs:", err); // Hata yakalama
        }
    };
}

export const getBlogsByCategoryId = (categoryId) => {   
    return async (dispatch) => {
        var data = [];
        var response = await fetch(`http://localhost:3000/blogs?categoryId=${categoryId}`);
        data = await response.json();

        dispatch({
            type:"GET_BLOGS_BY_CATEGORY_ID",
            payload:{
                blogs:data
            }
        });
    }
}

export const addBlog = (blog) => {
    return async (dispatch) => {
        try {
            blog.id=uuid();
            blog.createdDate=new Date(Date.now()).toLocaleDateString("tr-TR");
            var requestObj = {
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(blog)
            }
            var response = await fetch("http://localhost:3000/blogs",requestObj)

            if(!response.ok){
                return false;
            }
            dispatch({
                type:"ADD_BLOG",
                payload:{
                    id:blog.id,
                    title:blog.title,
                    content: blog.content,
                    image: blog.image,
                    createdDate: blog.createdDate,
                    categoryId:blog.categoryId,
                    userName:blog.userName
                }
            })
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

export const selectedBlog = (blogId) => {
    return async (dispatch) => {
        try {
            var response = await fetch(`http://localhost:3000/blogs?id=${blogId}`);
            var blogs = await response.json();

            dispatch({
                type:"SELECTED_BLOG",
                payload:{
                    blog:blogs[0]
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}


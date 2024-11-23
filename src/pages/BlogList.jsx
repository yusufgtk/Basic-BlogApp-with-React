import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getBlogsByCategoryId } from '../actions/BlogActions';
import BlogCard from '../components/BlogCard';
import { getCategory } from '../actions/CategoryActions';

const BlogList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const category = useSelector((state) => state.categories[0]);

    useEffect(()=>{
        dispatch(getBlogsByCategoryId(id))
        dispatch(getCategory(id));
        console.log(blogs[0]);
    },[dispatch,id]);

    if(category === undefined){
        return <div>loading...</div>
    }
    
    return (
        <div>
            <h1>{ category.name }</h1>
            <div className='row'>
                {
                    blogs.map(blog => (
                        <div key={blog.id} className='col-12'>
                            <BlogCard  blog={blog}/>
                        </div>
                    
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedBlog } from '../actions/BlogActions'

const Details = (  ) => {
    const { id } = useParams();
    const blog = useSelector(state => state.blogs.selectedBlog); 
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectedBlog(id));
    }, [dispatch]);

    if(!blog){
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <div className='row'>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                    <img src={`./images/${blog?.image}` || "./images/blog.image"} alt="" />
                </div>
                <div className='col-12 col-md-8 col-lg-8 col-xl-8'>
                    <h3>{ blog.title }</h3>
                    {
                        categories.map(category => (
                            category.id===blog.categoryId ?
                            <div>{ category.name }</div>:
                            <div></div>
                        ))
                    }
                    <div>Yazar: { blog.userName }</div>
                    <div>{ blog.content }</div>
                    <p>Paylaşma Tarihi: { blog.createdDate }</p>
                </div>
            </div>

        </div>
    )
}

export default Details
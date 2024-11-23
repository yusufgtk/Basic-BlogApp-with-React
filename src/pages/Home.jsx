import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../actions/BlogActions';
import BlogCard from '../components/BlogCard';
import { getCategories } from '../actions/CategoryActions';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const categories = useSelector((state) => state.categories);

    useEffect(()=>{
        dispatch(getBlogs());
        dispatch(getCategories());
    }, [dispatch]);

    if (!blogs || blogs.length === 0) {
        return <div>Loading blogs...</div>;
    }

    return (
        <div>
            <h1 className='text-center my-5'>Top Blogs</h1>
            <div className='row'>
                <div className='col-12 col-lg-8 col-xl-8'>
                    <div className='row'>
                        {
                            blogs.map((blog, index)=>(
                                <div key={index} className='col-12'>
                                    <BlogCard  blog={blog}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='col-12 col-lg-4 col-xl-4'>
                <ul className="list-group shadow-lg">
                    {
                        categories.map(category => (
                            <Link to={`/bloglist/${category.id}`} key={category.id} className='list-group-item list-group-item-action fs-5'>{ category.name }</Link>
                        ))
                    }
                </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Home
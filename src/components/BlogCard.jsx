import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import { useSelector } from 'react-redux'

const BlogCard = ({ blog }) => {
    const categories = useSelector(state => state.categories);

    return (
        <div className="card mb-4 border-dark rounded-4 shadow-lg">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={`./images/${blog?.image}` || "./images/blog.image"} className="img-fluid rounded-start" alt={blog?.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ blog?.title }</h5>
                        <p className="card-text mb-2">{ blog?.content }</p>
                        {
                            categories.map(category=>(
                                category.id === blog?.categoryId ?
                                <div>{ category.name }</div>:
                                <div></div>
                            ))
                        }
                        <p className="card-text"><small className="text-body-secondary">Shared Date : {blog?.createdDate}</small></p>
                        <div className='d-flex justify-content-between'>
                            <div>
                                Yazar: <i class="fa-solid fa-user fa-xs me-2"></i><span>{ blog?.userName }</span>
                            </div>
                            <div>
                                <Link to={`/details/${blog.id}`} className='btn btn-primary'>Details</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
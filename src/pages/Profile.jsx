import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'
import { deleteMyBlog, getMyBlogs } from '../actions/MyBlogsAction';
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = useSelector(state => state.user);
    const myBlogs = useSelector(state => state.myBlogs.blogs);
    const dispatch = useDispatch();

    const handleSubmitDelete = (blog,e) =>{
        e.preventDefault();
        if(user.userName === blog.userName){
            dispatch(deleteMyBlog(blog)).then(result => {
                if(result){
                    console.log("Blog silindi!");
                }
                else{
                    console.log("Blog silinemedi!");
                }
            })
        }else{
            console.log("Yetkisiz işlem!");
        }
        
    }

    const handleSubmitEdit = (blog,e) =>{
        e.preventDefault();
        if(user.userName === blog.userName){
            dispatch(deleteMyBlog(blog)).then(result => {
                if(result){
                    console.log("Blog silindi!");
                }
                else{
                    console.log("Blog silinemedi!");
                }
            })
        }else{
            console.log("Yetkisiz işlem!");
        }
        
    }
    useEffect(() => {
        dispatch(getMyBlogs(user.userName));
    }, [])


    if(!user.isAuthentication){
        return(
            <div>
                <h1>Giriş Yapın!</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-center my-4'>Profil - { user.userName }</h1>
            <div>
                <table className="table table-success table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Başlık</th>
                            <th scope="col">Content</th>
                            <th scope="col">İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBlogs.map(blog=>(
                                <tr key={blog.id}>
                                    <th scope="row">{ blog.id }</th>
                                    <td>{ blog.title }</td>
                                    <td>{blog.content }</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                            <div className='me-2'>
                                                <Link to={`/blogedit/${blog.id}`} className='btn btn-warning'><i class="fa-solid fa-pen-to-square"></i></Link>
                                            </div>
                                            <div>
                                                <form onSubmit={(e) => handleSubmitDelete(blog, e)}>
                                                    <input type="hidden" id={blog.id} value={blog.id}/>
                                                    <button type="submit" className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        
                                    </td>
                                </tr>
                                
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from '../actions/BlogActions';
import { useNavigate } from 'react-router-dom';

const BlogCreate = () => {
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content, categoryId);

        var newMessage = [];
        if(title === '' || title === null || title.length < 3){
            newMessage.push("Başlık Giriniz! en az 3");
        }
        if(content === '' || content === null || content.length < 10){
            newMessage.push("İçerik Giriniz! en az 10");
        }
        if(categoryId === '' || categoryId === null){
            newMessage.push("kategori Seçiniz!");
        }

        if(newMessage.length > 0){
            setMessages(newMessage);
        }
        else{
            const blog = {
                title:title,
                content:content,
                image:"blog.png",
                categoryId:categoryId,
                userName:user.userName
            }
            dispatch(addBlog(blog)).then(result => {
                if(result){
                    console.log("Blog paylaşıldı!");

                    navigate('/');
                }
                else{
                    console.log("Blog paylaşılamadı!");
                }
            })
        }
        
    }

    if(!user.isAuthentication){
        return(
            <div>
                <h1>Giriş Yapın!</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className='text-center my-4'>Blog Oluştur</h1>
            {
                messages.length > 0 ? 
                messages.map(msg=>(
                    <div className='alert alert-danger'>
                        { msg }
                    </div>
                )):
                <div></div>
                
            }
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Başlık</label>
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className='mb-3'>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setCategoryId(e.target.value)}>
                            <option selected>Kategori Seç</option>
                            {
                                categories.map(category=>(
                                    <option key={ category.id } value={ category.id }>{ category.name }</option>
                                ))
                            }
                            
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Paylaş</button>
                </form>
            </div>
        </div>
    )
}

export default BlogCreate
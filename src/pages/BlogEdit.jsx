import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editBlog, selectedMyBlog } from '../actions/MyBlogsAction';

function BlogEdit() {
    const { id } = useParams();
    const blog = useSelector(state => state.myBlogs.selectedMyBlog);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [title, setTitle]  =useState(blog.title || '');
    const [content, setContent]  =useState(blog.content || '');
    const [categoryId, setCategoryId]  = useState(blog.categoryId);
    const [messages, setMessages]  =useState([]);
    
    useEffect(() => {
        dispatch(selectedMyBlog(id));
        console.log(id);
    }, [dispatch,id]);

    useEffect(() => {
        if (blog) {
            setTitle(blog.title || '');
            setContent(blog.content || '');
            setCategoryId(blog.categoryId);
        }
    }, [blog]);

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
        }else{
            const blogModel = {
                title:title,
                content:content,
                categoryId:categoryId
            }
            dispatch(editBlog(blogModel,id)).then(result => {
                if(!result){
                    console.log("güncelleme yapılamadı!");
                }
                else{
                    console.log("güncelleme yapıldı.");
                }
            });
        }
    }
    if(!blog){
        return(
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
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
                        <input type='text' className='form-control' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                    </div>
                    <div className='mb-3'>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                        <option value={-1}>Kategori Seç</option>
                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                                selected={categoryId === category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Paylaş</button>
                </form>
            </div>
        </div>
    )
}

export default BlogEdit
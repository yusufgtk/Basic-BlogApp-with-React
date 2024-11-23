import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/UserAction';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        var newMessages = [];
        if(userName === '' || userName === null){
            newMessages.push("Kullanıcı adı boş!");
        }
        if(password === '' || password === null){
            newMessages.push("Şifre boş!");
        }
        if(rePassword === '' || rePassword === null){
            newMessages.push("Şifre tekrarı boş!");
        }
        if (password !== '' && rePassword !== '' && password !== rePassword) {
            newMessages.push("Şifreler eşleşmiyor!");
        }
        console.log(userName, password, rePassword);

        if(newMessages.length > 0){
            setMessages(newMessages);
        }
        else{
            setMessages([]);
            const user = {
                userName:userName,
                password: password
            }
            dispatch(registerUser(user)).then(result => {
                if(result){
                    console.log("Kayıt Başarılı!");
                }
                else{
                    console.log("Kayıt Oluşturulamadı!!");
                }
            }).catch(err=> console.log(err));
            
        }
        
    }

    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-9 col-lg-6 col-xl-6'>
                <h1 className='text-center py-5'>Kayıt Ol</h1>
                {
                    messages.length >= 0 ? 
                    messages.map(message=>(
                        <div class="alert alert-danger py-0 mb-2" role="alert">
                            { message }
                        </div>
                    )) :
                    <div></div>
                }
                
                
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 mt-3'>
                        <input type="text" placeholder='Kullanıcı Adı' className='w-100 form-control border-2' onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type="password" placeholder='Şifre'  className='w-100 form-control border-2' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type="password" placeholder='Şifre Tekrar'  className='w-100 form-control border-2' onChange={(e) => setRePassword(e.target.value)}/>
                    </div>
                    <div className='mb-3 d-flex justify-content-end'>
                        <button className='btn btn-primary'>Tamamla</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
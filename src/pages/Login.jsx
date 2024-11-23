import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/UserAction';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName === '' || password === ''){
            setMessage('Lütfen bilgileri doldurunuz!');
            return;
        }
        const user = {
            userName:userName,
            password:password
        }
        dispatch(loginUser(user)).then((result) => {
            if(result){
                console.log("Giriş başaralı!");
                navigate('/');
            }else{
                setMessage('');
                setMessage('Girilen bilgiler yanlış!');
            }
        }).catch((err) => {
            console.log(err);
        });

    }
    return (
        <div className='row  d-flex justify-content-center my-5'>
            <div className='col-12 col-md-9 col-lg-6 col-xl-6 bg-success rounded-4'>
                <h1 className='text-center my-4 text-light'>Giriş</h1>
                {
                    message !== '' ? 
                    <div className="alert alert-danger py-0 mb-2" role="alert">
                        { message }
                    </div>:
                    <div></div>
                }
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder='Kullanıcı adınızı giriniz.' onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <input type="password" className="form-control" placeholder='Şifrenizi giriniz.' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='d-flex justify-content-end my-4'>
                        <button type="submit" className="btn btn-outline-light fw-bold">Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
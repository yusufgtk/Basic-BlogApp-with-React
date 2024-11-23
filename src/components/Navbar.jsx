import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './component.css'
import { useDispatch, useSelector } from 'react-redux';
import { logautUser } from '../actions/UserAction';

const Navbar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log(user);

    const logaut = () => {
        dispatch(logautUser());
    }
    return (
        <nav className="navbar navbar-expand-lg bg-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bolder" to='/'>Blog Master</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active">Home</NavLink>
                                </li>
                                {
                                    user.isAuthentication &&
                                    <li className="nav-item">
                                        <NavLink to="/blogcreate" className="nav-link active">Blog Create</NavLink>
                                    </li>
                                }
                                
                            </ul>
                        </div>
                        <div>
                            {
                                user.isAuthentication ? 
                                <ul className="navbar-nav">
                                    <li className="nav-item me-2">
                                        <NavLink to="/profile" className="nav-link active"><i class="fa-solid fa-user me-2"></i><span>{ user.userName }</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className='btn' onClick={logaut}>
                                            <i class="fa-solid fa-right-from-bracket me-2"></i><span>Çıkış Yap</span>
                                        </button>
                                    </li>
                                </ul>:
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link active">Giriş Yap</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link active">Kayıt Ol</NavLink>
                                    </li>
                                </ul>
                            }
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
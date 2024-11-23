import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import Details from "./pages/Details";
import BlogCreate from "./pages/BlogCreate";
import Error from "./pages/Error";
import { Provider, useDispatch } from "react-redux";
import store from "./store/AppStore";
import BlogList from "./pages/BlogList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect } from "react";
import { getUserById } from './actions/UserAction';
import Profile from "./pages/Profile";
import BlogEdit from "./pages/BlogEdit";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserById(id));
  },[dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/bloglist/:id" element={<BlogList/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/blogcreate" element={<BlogCreate/>}/>
          <Route path="/blogedit/:id" element={<BlogEdit/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

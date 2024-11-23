import { type } from "@testing-library/user-event/dist/type";


export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            var response2 = await fetch(`http://localhost:3000/users?userName=${user.userName}`);
            var data = await response2.json();
            if(data.length > 0){
                return false;
            }
            var requestObj = {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            }
            var response = await fetch("http://localhost:3000/users",requestObj);
            if(!response.ok){
                return false;
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            var response = await fetch(`http://localhost:3000/users?userName=${user.userName}`);
            var data = await response.json();
            if(data.length > 0){
                if(data[0].password === user.password){
                    localStorage.setItem("id",data[0].id);
                    dispatch({
                        type:"LOGIN_USER",
                        payload:{
                            user:data[0]
                        }
                    })
                    return true;
                }
                return false;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}

export const logautUser = () => {
    localStorage.clear();
    return {
        type:"LOGAUT_USER"
    }
}

export const getUserById = (id) => {
    return async (dispatch) => {
        try {
            var response = await fetch(`http://localhost:3000/users?id=${id}`);
            var data = await response.json();
            if(data.length > 0){
                const user = data[0];
                dispatch({
                    type:"LOGIN_USER",
                    payload:{
                        user:user
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}
import axios from 'axios';
const api = 'http://127.0.0.1:8000';
export const register = newUser => {





    return axios.post(`${api}/api/register`, newUser, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        console.log(res)
    })
        .catch(err => {
            console.log(err)
        })
}





//////////////////////////////////////////////////////////////////
export const login = user => {

    return axios.post(`${api}/api/login`, {
        email: user.email,
        password: user.password
    }, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        localStorage.setItem("usertoken", res.data.success.token)
        localStorage.setItem("role", res.data.role)
       

    })
        .catch(err => {
            console.log(err)
        })
}


export const getProfile = newUser => {

    return axios.get(`${api}/api/user`, {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
    }).then(res => {
        return res.data
    })
        .catch(err => {
            console.log(err)
        })
}
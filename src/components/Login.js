import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../components/constant';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, dispatch } = useContext(UserContext);

    const login = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const reqData = {

            email: email,
            password: password

        }
        axios.post(`${API_BASE_URL}/users`, reqData, config)
            .then((response) => {
                // assume user has successfully authenticated
                // fetch the details of Authenticated user, in our assume userId=1
                const userId = 1;
                fetch(`${API_BASE_URL}/users/${userId}`)
                    .then((response) => response.json())
                    .then((json) => {
                        localStorage.clear();
                        localStorage.setItem('user', JSON.stringify(json));
                        localStorage.setItem('token', 'qkbfgqefipgb');

                        const token = localStorage.getItem('token');
                        const user = JSON.parse(localStorage.getItem('user'));
                        const userState = { 'token': token, 'user': user };
                        const action = { type: 'LOGIN', payload: userState };
                        dispatch(action);
                        
                        navigate('/posts');
                    });

            })
            .catch((err) => {

                console.log(err)
            });
    }


    return (
        <div className='container'>
            <h3 className='text-center text-uppercase pt-4'> Please login beloe</h3>
            <div className='text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(e) => login(e)}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" required />

                    </div>

                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login
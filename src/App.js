
import React, { useEffect, createContext, useReducer, useContext, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Footer from './components/Footer';
import Allposts from './screens/AllPosts';
import PostDetail from './PostDetail';
import CreatePost from './screens/CreatePost';
import Signup from './components/Signup';
import Login from './components/Login';
import { initalUserState, userReducer } from './reducers/userReducer';

export const UserContext = createContext();

function DynamicRoutes() {
  const navigate = useNavigate();
  const{ state, dispatch } = useContext(UserContext);

  useEffect(()=> {
 const token = localStorage.getItem('token');
 if(token){ //user is already logged in
  const user = JSON.parse(localStorage.getItem('user')); 
  const userState = {'token': token, 'user':user };
  const action = {type: 'LOGIN', payload: userState};
  dispatch(action);
  navigate('/posts');
 } else{
   navigate('/login');
 }

  }, []); 



  return (
    <Routes>
      <Route exact path='/' element={<Home />} ></Route>
      <Route exact path='/login' element={<Login />} ></Route>
      <Route exact path='/signup' element={<Signup />} ></Route>
      <Route exact path='/posts' element={<Allposts />}></Route>
      <Route exact path='/myposts' element={< myAllPosts />}></Route>
      <Route exact path='/create' element={<CreatePost />}></Route>
      <Route exact path='/create/:postId/:userId' element={<CreatePost />}></Route>
      <Route exact path='/posts/:postId/:userId' element={<PostDetail />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='contact' element={<Contact />}></Route>
    </Routes>
  );
}


function App() {

  const [state, dispatch] = useReducer(userReducer, initalUserState);
  return (
    <UserContext.Provider value={{state: state, dispatch: dispatch }}>
    <Router>
      <div>
        <NavBar></NavBar>
        <DynamicRoutes />
        <Footer />
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

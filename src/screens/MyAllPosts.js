import React, { useEffect, useState, useContext } from 'react'
import { API_BASE_URL } from '../components/constant'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../App';

function MyAllPosts() {
    const navigate = useNavigate();

    //create a variable to store all posts and a set method to update the value of posts
    //useState hook helps us create this variable with empty array 
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const { state, dispatch } = useContext(UserContext);


    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        var alertPlaceholder = document.getElementById('alertMsg')
        alertPlaceholder.append(wrapper)
    }


    const deletePost = (postId) => {
        // console.log(postId);
        let action = window.confirm("are you sure to proceed ?");
        if (action) {
            axios.delete(`${API_BASE_URL}/posts/${postId}`)
                .then((resp) => {
                    console.log(resp)
                    alertFunction(`post with Id ${postId} has been deleted`, 'success')
                    navigate('/posts');
                })
                .catch((err) => {
                    console.log(err)
                    alertFunction(`Error occured while deleting post `, 'danger')
                })
        }
    }

    //ES6 function to get all posts from REST API 
    const getAllPosts = () => {
        
        if (state) {
            setLoader(true)
            fetch(`${API_BASE_URL}/posts?userId=${state.user.id}`)
                .then((response) => response.json())
                .then((json) => {
                    //console.log(json)
                    setPosts(json)
                    setLoader(false)
                });
        }

    }
    //we want to load deta on load of this component 
    useEffect(() => {
        //console.log("All posts loaded");
        getAllPosts();
    }, []); //empty array means execute on;y once when component loads

    return (
        <div >
            <section className='container pt-2'>
                <h3 className='text-center text-uppercase py-4'> My  All Posts</h3>
                <div id="alertMsg"></div>
                <div className='row'>
                    {
                        loader ?
                            <div className='col-12 text-center'>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : posts.map((post, index) => {
                                return <div key={index} className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                                    <div className="card">
                                        <img style={{ height: "280px" }} src="https://source.unsplash.com/random/400*400/?city,night" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                            <div className='d-flex justify-content-between'>
                                                <Link to={`/posts/${post.id}/${post.userId}`} className='btn btn-primary text-uppercase'>
                                                    <i className="fa-solid fa-location-arrow me-1"></i>Details
                                                </Link>
                                                <Link to={`/create/${post.id}/${post.userId}`} className='btn btn-warning text-uppercase' >
                                                    <i className="fa-solid fa-pen-to-square me-1"></i> Edit
                                                </Link>
                                                <button onClick={() => { deletePost(post.id) }} className='btn btn-danger text-uppercase'>
                                                    <i className="fa-solid fa-trash me-1"></i> Delete
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                    }
                </div>

            </section>

        </div>
    )
}

export default MyAllPosts
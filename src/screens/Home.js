import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
      <section className='hero-section '>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='featured-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>  Featured Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='latest-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'> Latest Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=60" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='container-fluid bg-primary bg-gradient mt-4' style={{ minHeight: "180px" }}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <i className=" fs-1 text-warning m-3 fa-solid fa-location-dot"></i>
            <h3 className='text-white text-uppercase'> we have wide variety posts </h3>
            <button className='fw-bold btn btn-warning my-2 text-dark text-uppercase'> view All post</button>
          </div>
        </section>
      </section>
      <section className='our-portfolio container'>
        <h3 className='text-center text-uppercase py-4'> Our portfolio  </h3>
        <div className="container overflow-hidden">
          <div className="row gy-5">
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>



  )
}

export default Home
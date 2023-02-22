import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className='home_container'>
        <div className='banner_container'>
            <div className='banner_title'>
                <h1>
                    Digital Label <span>Finishing</span> & <span>Converting</span> Equipment.
                </h1>
                <div className='divider'>

                </div>
            </div>
            <div className='banner_img'>
                <img src="img/RD330-600backscorring.jpg" alt="RD330-600backscorring" />
                <img src="img/RDF330-300-a.jpg" alt="RDF330-300-a" className='img_z' />
            </div>
        </div>

        <div className='banner_links'>
            <h4>Digital Label Finishing</h4>
            <h4>100% Inspection Systems</h4>
            <h4>Turret Rewinders</h4>
        </div>

        <div classNameName='carousel_brand'>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h3>A Brand New Challenger in Label Converting</h3>
            </div>
            <div className="carousel-item">
                <h3>Leading the way on Competitive Pricing</h3>
            </div>
            <div className="carousel-item">
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                <h3>Engineering Standards without Compromise</h3>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
    </section>
  )
}

export default Home;
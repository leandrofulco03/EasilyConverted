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

        <div className='text_info'>
            <p>
                Whilst being a new brand in the world of label finishing & converting machinery, our pedigree comes from over 30 years of hands-on experience in self-adhesive label production. <br /><br />

                As a matter of fact, our machines are built with the end-user in mind. They’re not just a good-looking piece of equipment that leaves a lot to be desired. Obviously, we know what the ‘must have’ requirements are in our machines. You’ll basically have all of those, that goes without saying. However, we haven’t stopped there. In addition to the basics, we’ve included a number of features from the self-adhesive label production ‘wish list.’ Not to mention our machines are Competitively Priced. In other words, it’s definitely a win-win for everyone.
                The bottom line and to clarify, we know the requirements for self-adhesive label production. So we have all of these covered. In addition, Easily Converted knows what the self-adhesive label production industry needs to make their lives easier. So with that in mind, our range of Digital Finishing & Label Converting Equipment will fulfill all your requirements. In other words, we’ll make your self-adhesive label production so much easier with a number of price inclusive features. <br /><br />

                What’s more, when you talk with us you’ll be talking to an expert and not just a salesperson. Talk to us today and let us impress you with our range of Digital Finishing & Label Converting Equipment.
            </p>
            <div className='employment'>
                <h1>Employment Oportunities</h1>
                <p>Currently, we have opportunities for self-employed european sales agents</p>
                <button className='btn_primary'>MORE INFO</button>
            </div>
        </div>

        <div className='cards_container'>
            <h1><span>Take a look</span> for yourself</h1>
            <h4>Check out our machines, we know you’ll see the difference</h4>
            <div className='cards_div'>
                <div className="card">
                    <span>Digital Finishing</span>
                    <button className='btn_primary'>View Machines</button>
                </div>
                <div className="card">
                    <span>100% Inspection Systems</span>
                    <button className='btn_primary'>View Machines</button>
                </div>
                <div className="card">
                    <span>Turret Rewinders</span>
                    <button className='btn_primary'>View Machines</button>
                </div>
                <div className="card">
                    <span>Full Product Range</span>
                    <button className='btn_primary'>View Machines</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;
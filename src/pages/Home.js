import React from 'react';
import './Home.css';
import { Link, Element } from 'react-scroll';


const Home = () => {
    return <div>
        {/* <nav>
            <Link to="section1" smooth={true} duration={500}>Section 1</Link>
            <Link to="section2" smooth={true} duration={500}>Section 2</Link>
            <Link to="section3" smooth={true} duration={500}>Section 3</Link>
        </nav> */}
        <Element name="section1" className="section">
            <div className='home-banner'>
                <div className='home-banner-title1'>
                    Dolor consectetur deserunt do et pariatur anim .
                </div>
                <div className='home-banner-title2'>
                    Ullamco commodo labore magna laboris sunt tempor.
                </div>

            </div>
        </Element>
        <Element name="section2" className="section">
            <h2>Section 2</h2>
        </Element>
        <Element name="section3" className="section">
            <h2>Section 3</h2>
        </Element>

    </div>



    // <div className="home-container">
    //     <div className="home-content">

    //         <div className='header1'>
    //             Dolor consectetur deserunt do et pariatur anim eiusmod officia cillum exercitation.
    //         </div>
    //         <div className='header2'>
    //             Ullamco commodo labore magna laboris sunt tempor ipsum pariatur incididunt et consectetur commodo in.
    //         </div>

    //     </div>


    // </div>
};

export default Home;

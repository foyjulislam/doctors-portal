import React from 'react';
import './TopBanner.css'
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <section className="top-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 top-left">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis exercitationem labore necessitatibus? Temporibus, numquam asperiores, vel quod doloribus necessitatibus expedita praesentium error exercitationem quas illum, vero dolorum aliquid soluta?</p>
                        
                        <div className="get-appointment">
                            
                                <Link to="/get-appointment">
                                    <button className="btn btn-primary">Get Appointment</button>
                                </Link>
                            
                        </div>
                    </div>
                    <div className="col-md-4 top-right">
                        
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default TopBanner;
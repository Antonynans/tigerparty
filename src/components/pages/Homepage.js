import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

export default function Homepage() {
  return (
    <div>
      <Navbar />
        <div className="card card-body" style={{height:'100vh'}}>
        </div>

        {/* <div className="card card-body">
        </div>

        <div className="card card-body">

        </div> */}

      <Footer />
    </div>
  )
}

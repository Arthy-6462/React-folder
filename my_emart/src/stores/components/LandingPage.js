import React from 'react'
import {Link} from 'react-router-dom'
import Mobiles from './Mobiles'

const LandingPage = () => {
  return (
    <> 
     {/*Heder  */}
<section className='header_section d-flex justify-content-center align-items-center w-100'>
<nav className=" container navbar navbar-expand-lg navbar-light  w-100 nav_bar">
  < img src="./assets/images/Emart-logo.jpg" className="navbar-brand" alt="Emart-logo.jpg" />

  <div className="collapse navbar-collapse nav_links" id="navbarSupportedContent">
  <form className="d-flex my-2 my-lg-0 ">
    
      <input className="form-control mr-sm-2 ms-5 mx-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className="navbar-nav mr-auto ">
       <h5 className='ms-5'>Home</h5>
       <h5 className='ms-5'>Login/SignUp</h5>
    </div>
    <div >
        <h4 >Cart <sup className='bg-primary p-1'>0</sup></h4>
    </div>
   
  </div>
</nav>

</section>
    {/* Navber-end */}
    {/* ======================sub header========================================== */}
    <div className='subHead w-100 bg-light'>
        <ul className='d-flex justify-content-around pt-3'>
<li>Mobiles</li>
<li>Furniture</li>
<li>Kitchen</li>
<li>Computers</li>
<li>Books</li>
<li>Watch</li>
<li>Fridge</li>
<li>Ac</li>
<li>Men</li>
<li>women</li>
        </ul>
    </div>
    {/* ======================================sub-header end======================= */}
    {/*======================== main Content ======================start===============*/}
    <div className="mainSec">
        <div className="row">
            {/* sideBar */}
        <div className="col-3">
            <div className="sideBar">
<div className='side_img'>
    <img src="/assets/images/mobile_offers.jpg" alt="" />
</div>
</div>
</div>
        {/* main Content */}
    <div className="col-9">
         <div className='Main'>
<Mobiles/>

         </div>

    </div>
</div>
        {/* footer */}
    <div className='footer'></div>
    </div>
    </>
  )
}

export default LandingPage;
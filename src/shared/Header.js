import React from 'react';
import { Link } from 'react-router-dom';

export function Header(){

	return(
	<nav className="navbar navbar-dark navbar-expand-lg">
		<div className="container">    		
			<Link className="navbar-brand" to='/item'>DropShop</Link>        	
        	<ul className="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-left mb-md-0">
          			<li><a href="#" className="nav-link px-2 text-white">Nowości</a></li>
          			<li><a href="#" className="nav-link px-2 text-white">Jak kupować</a></li>
          			<li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          			<li><a href="#" className="nav-link px-2 text-white">O nas</a></li>
        	</ul>       
        		<form className="form-inline my-2 my-lg-0">
         			<input type="search" className="form-control form-mr-sm-2 ds-search" placeholder="Wyszukaj..." aria-label="Search"></input>      			
       			</form>
       			<button className="btn btn-outline-success my-2 my-sm-0 btn-ds-search" type="submit">Szukaj</button>
       		<div className='collapse navbar-collapse' id="navbarNavAltMarkup">
	        	<div class='navbar-nav ml-auto'>
	          			<a className='nav-item nav-link active' href=''>Logowanie<span className="sr-only"></span></a>
	          			<a className='nav-item nav-link' href=''>Rejestracja</a>
	        	</div>
	        </div>
      	</div>
   	</nav>
	)
}
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(<>
    
	<footer className="footer mt-auto py-5 text-center">
		<p>
			Made with Sazón, Sabor, Dulzura, y <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://es.wikipedia.org/wiki/Arepa">Los Latinos</a>
		</p>
	</footer>
    
    </>)
}

export default Footer
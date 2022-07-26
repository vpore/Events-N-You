import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/">Blog</a>
		</p>
		<p>
			<a href="/">Product</a>
		</p>
		<p>
			<a href="/">Community</a>
		</p>
		<p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {

	const user = JSON.parse(localStorage.getItem('profile'));

    return(
        <>
            <div className="landing-navbar">
                <div className="landing-navbar-logo">
                    {/* <img src={logo} alt="product-logo" /> */}
					<p>Events-N-You</p> 
                </div>
				
                <div className="landing-navbar-links">
                    <NavLinks />
					{
						user ? (
							<button className="button-two">
								<span>
									Log Out
								</span>
							</button>
						) : (
							<Link to='/login'>
								<button className="button-two">
									<span>
										Log In
									</span>
								</button>
							</Link>
						)
					}
                </div>
            </div>
        </>
    );
}

export default Navbar;
import React, { useEffect, useState } from "react";
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

	//const location = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const [userr, setUserr] = useState(JSON.parse(localStorage.getItem('role')));

	const logout = () => {
		localStorage.clear();
		setUser(null);
        navigate('/');
    }

    return(
        <>
            <div className="landing-navbar">
                <div className="landing-navbar-logo">
                    {/* <img src={logo} alt="product-logo" /> */}
					<p>Events-N-You</p> 
                </div>
				
                <div className="landing-navbar-links">
					
					{
						userr && userr !== 'principal' && (
							<Link to='/committee/form'>
								<button className="button-two">
									<span>
										Event Request
									</span>
								</button>
							</Link>
						)
					}
					{
						user ? (
							<button className="button-two" onClick={logout}>
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
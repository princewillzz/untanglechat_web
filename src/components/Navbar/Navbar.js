import React from "react";
import "./navbar.css";

import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav>
				<div className="companyLogoContainer">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<h1>untangledchat</h1>
				</div>
				<ul className="nav-items">
					<li className="nav-item">
						<Link
							className="nav-item-link"
							to={{
								pathname: "/",
							}}
						>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-item-link"
							to={{
								pathname: "/privacy-policy",
							}}
						>
							Privacy-policy
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;

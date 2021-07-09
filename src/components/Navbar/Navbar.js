import React from "react";
import "./navbar.css";

import logo from "../../assets/images/logo.png";

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
			</nav>
		</>
	);
}

export default Navbar;

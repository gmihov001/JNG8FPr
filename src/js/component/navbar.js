import React from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/stockPage";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

export const Navbar = props => {
	// console.log(props);
	return (
		<nav className="navbar navbar-expand">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbartext navbar-nav">
					<li className="nav-item">
						<a
							className="tradestocks nav-link"
							href="/stockpage"
							onClick={() => props.history.push("/stockpage")}>
							Trade Stocks
						</a>
					</li>
					<li className="nav-item">
						<a className="transactionhistory nav-link" href="/transactionhistory">
							Transaction History
						</a>
					</li>
					<li className="nav-item">
						<a className="leaderboard nav-link" href="/leaderboard">
							Leader Board
						</a>
					</li>
					<li className="nav-item">
						<a className="mystocks nav-link" href="/mystocks">
							My Stocks
						</a>
					</li>
					<li className="nav-item">
						<a className="userprofile nav-link" href="/userprofile">
							User Profile
						</a>
					</li>
					<li className="nav-item">
						<a className="editprofilee nav-link" href="/editprofile">
							Edit Profile
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	history: PropTypes.object
};

export default withRouter(Navbar);

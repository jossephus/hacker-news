import React from "react";
import NavLink from "./NavLink";
import {Link} from "react-router-dom";
function NavBar() {
	return (
		<div className="bg-navbar  flex items-center pr-2 ">
			<h1 className="text-white border cursor-pointer border-white px-2 m-1 " >
				<Link to="/" >
					Y
				</Link>	
			</h1>
			<p className="font-bold ">Hacker News</p>
			<ul className="  flex-1 flex ml-3 space-x-3 text-sm   ">

				<NavLink text="new"  />
				<NavLink text="past" className="border-l-2 border-gray-900 "  />
				<NavLink text="comments" className="border-l-2 border-gray-900"  />
				<NavLink text="ask" className="border-l-2 border-gray-900"  />
				<NavLink text="show"  className="border-l-2 border-gray-900" />
				<NavLink text="jobs"  className="border-l-2 border-gray-900" />
				<NavLink text="submit"  className="border-l-2 border-gray-900" />

			</ul>
		</div> 
		)
	
}
export default NavBar;

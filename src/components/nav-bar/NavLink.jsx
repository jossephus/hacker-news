import React from "react";

function NavLink({to='#' , text , className=""}) {
	return (
		<li className={className}>
				<a href={to} className="ml-2">
					{text}
				</a>
		</li>
		);
}
export default NavLink;
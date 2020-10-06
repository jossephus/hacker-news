import React , {useEffect} from "react";
import {Link} from "react-router-dom";
function SingleNews({index,title , id , user , points , time , commentCount , onLoading }) {
	
	useEffect(()=>{
		onLoading();
	} , []);

	return (
		<div className=" ml-3 flex flex-col" >
				<div className="flex">
					<p >{index}.</p>
					<p className="ml-2">
						<Link to={`news/${id}`}> 
							{title}
						</Link>
					</p>
				</div>
				<div className="flex ml-6 space-x-1  text-sm text-gray-500">
					<p>{points } points  </p>
					<p> 
						<span>by </span>
						<a href="#">{user}</a>
					</p>
					<p> {time}</p>
					<p> 
						<a href="#"> 
							{commentCount} comments
						</a>
					</p>

				</div>

			</div>

	);
}
export default SingleNews;
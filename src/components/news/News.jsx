import React from "react";

function News({news}){
	return (
		<div className=" ml-3 flex flex-col" >
					<div className="flex items-center">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
						<p className="ml-2">{news.title}"</p>
					</div>
					<div className="flex ml-6 space-x-1  text-sm text-gray-500">
						<p>{news.points} points  </p>
						<p> 
							<span>by</span>
							<a href="/user">{news.by}</a>
						</p>
						<p> {news.time} hours ago </p>
						<p> 
							<a href="/comments"> 
								{news.descendants} comments
							</a>
						</p>
					</div>
				</div>
		);
}
export default News;

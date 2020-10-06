import React from "react";

function Comment({comment , ...otherProps}) {
	console.log("Comment " , comment?.text);
	return (
			<div   className="flex mt-2 ml-2 flex-col pl-3 border-l border-gray-900">
				<p className="text-sm text-gray-500">{comment?.by}  {comment?.time} minutes ago</p>
				<p className="font-mono mt-1"> {comment?.text}</p>
				{otherProps.children}
			</div>
		);

}
export default Comment;
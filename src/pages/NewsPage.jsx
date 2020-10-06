import React , {  useEffect } from "react"
import News from "../components/news/News";
import Comment from "../components/comments/Comment";
import {fetchStory} from "../redux/story/story-action.js";
import {useSelector , useDispatch} from "react-redux";
function NewsPage(props) {
	// console.log("Props from news page ", props);
	const dispatch = useDispatch();
	const story = useSelector(state => state.story)
	const comments = useSelector(state => state.story.comments)

	useEffect(() => {
		dispatch(fetchStory(props.match.params.storyId));
	} , []);

	const  myChildrenHere = (children) => {
		
		return children.map(childComment => {
			let childrenComments = comments.filter(comment => {
						return comment.comment.parent === childComment.comment.id;
				})
			return childrenComments.length !== 0 
				?
					 <Comment comment={childComment.comment}>
						{
							myChildrenHere(childrenComments)
						}
					</Comment>
				:
					 <Comment comment={childComment.comment} /> 
		});
	}

	return (
		<div className="flex-1 py-3  bg-body px-10">
		<News news={story.story} />
		{
			comments.length === 0 
			? 
				<div> 
					<h1> Loading Comments </h1>
					 <Comment >
					<Comment >
						<Comment >

						</Comment>
					</Comment>
					</Comment>
					<Comment >
						<Comment >
							<Comment >
						
						</Comment>
					</Comment>
					</Comment>
				</div>
			: 
			comments.filter(comment => comment.nestingNumber === 0).map(parent => {
				let childrenComments = comments.filter(comment => {
					return comment.comment.parent === parent.comment.id;
				})
				return childrenComments.length !== 0 
				?
					 <Comment comment={parent.comment}>
						{
							myChildrenHere(childrenComments)
						}
					</Comment>
				:
					 <Comment comment={parent.comment} />
			})
		}
		
			     
		</div> 
		);
}
export default NewsPage;

// <div  className="flex flex-col   mt-3  ">
// 				<div   className="flex mt-2 ml-2 flex-col pl-3 border-l border-gray-900">
// 					<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 					<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 					</p>
// 					<div className="flex flex-col mt-2 ml-2 pl-3  border-l border-gray-700">
// 						<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 						<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 						</p>
// 						<div className="mt-2  ml-2  pl-3  border-l border-gray-700">
// 							<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 							<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 							</p>
// 							<div className="mt-2  ml-2  pl-3  border-l border-gray-700">
// 								<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 								<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 								</p>
// 							</div>
// 						</div>
// 						<div className="mt-2 ml-2  pl-3  border-l border-gray-700">
// 							<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 							<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 							</p>
// 							<div className="mt-2 ml-2   pl-3  border-l border-gray-700">
// 								<p className="text-sm text-gray-500">Joker_vd 22 minutes ago</p>
// 								<p className="font-mono mt-1">Do people out there actually squash commits? Granted, I didn't change many work places in my career, but at no place where I worked people squashed commits. What's even the point of it? It's not like people routinely read the commit history, and when they do, they really would like a complete story, not 20 gargantuan commits that contain 3 years of development.
// 								</p>
// 							</div>
// 						</div>
// 					</div>   
// 				</div>   
// 			</div>
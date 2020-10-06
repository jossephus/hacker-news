import React , {  useEffect } from "react"
import News from "../components/news/News";
import Comment from "../components/comments/Comment";
import {fetchStory , clearPreviousData } from "../redux/story/story-action.js";
import {useSelector , useDispatch} from "react-redux";
function NewsPage(props) {
	// console.log("Props from news page ", props);
	const dispatch = useDispatch();
	const story = useSelector(state => state.story)
	const comments = useSelector(state => state.story.comments)

	useEffect(() => {
		dispatch(clearPreviousData());
		dispatch(fetchStory(props.match.params.storyId));
	} , []);

	const  myChildrenHere = (children) => {
		
		return children.map(childComment => {
			let childrenComments = comments.filter(comment => {
						return comment.comment.parent === childComment.comment.id;
				})
			return childrenComments.length !== 0 
				?
					 <Comment key={childComment.comment.id} comment={childComment.comment}>
						{
							myChildrenHere(childrenComments)
						}
					</Comment>
				:
					 <Comment  key={childComment.comment.id}  comment={childComment.comment} /> 
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
					 <Comment key={parent.comment.id} comment={parent.comment}>
						{
							myChildrenHere(childrenComments)
						}
					</Comment>
				:
					 <Comment key={parent.comment.id} comment={parent.comment} />
			})
		}
		
			     
		</div> 
		);
}
export default NewsPage;
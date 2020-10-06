import axios from "axios";
import { FETCH_STORY_REQUEST , FETCH_STORY_SUCCESS , FETCH_STORY_FAILURE , FETCH_COMMENT_SUCCESS,  FETCH_STORY_FINISH  } from "./story-constants";
 const fetchStoryRequest = () => {
	return {
		type : FETCH_STORY_REQUEST ,
	}
}
 const fetchStorySuccess = (story) => {
 	console.log("Actions fetchStorySuccess ");
	return {
		type : FETCH_STORY_SUCCESS ,
		payloads : story,
	}
}
 const fetchStoryFailure = (error) => {
	return {
		type : FETCH_STORY_FAILURE , 
		payloads : error,
	}
}
const fetchStoryFinished = () => {
	return {
		type : FETCH_STORY_FINISH,
	}
}
const fetchCommentSuccess = (comment , nestingNumber) => {
	return {
		type : FETCH_COMMENT_SUCCESS, 
		payloads : {
			comment : comment , 
			nestingNumber : nestingNumber,
		}
	}
}

					let nestingNumber = 0;

export const fetchStory = (id) => {
	return (dispatch) => {
		dispatch(fetchStoryRequest(id));
		axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
				.then((response) => {
					dispatch(fetchStorySuccess(response.data));
					return response.data['kids'];
				}).then(children => {
					fetchCommentForStory(children , nestingNumber , dispatch);
				})
				.catch(error => {
					dispatch(fetchStoryFailure(error));
				});
	}
}

const fetchCommentForStory = (children , nestingNumber , dispatch ) => {
	children.forEach(comment => {
		axios.get(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
			.then((response) => {
				dispatch(fetchCommentSuccess(response.data , nestingNumber));
				if( response.data.kids.length !== 0) {
					let copyNumber = Number(nestingNumber);
					fetchCommentForStory(response.data.kids , ++copyNumber , dispatch);
				}
			})
			.catch(error => {
				console.log("Error fetching comments " , error.message);
			});
	});
}

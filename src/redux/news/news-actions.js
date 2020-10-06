import axios from "axios";
import { CLEAR_NEWS_STORE,  FETCH_ALL_NEWS_REQUEST , FETCH_ALL_NEWS_SUCCESS , FETCH_ALL_NEWS_FAILURE , FETCH_ALL_NEWS_FINISH  } from "./news-constant";
 const fetchAllNewsRequest = () => {
	return {
		type : FETCH_ALL_NEWS_REQUEST ,
	}
}
 const fetchAllNewsSuccess = (news) => {
	return {
		type : FETCH_ALL_NEWS_SUCCESS ,
		payloads : news,
	}
}
 const fetchAllNewsFailure = (error) => {
	return {
		type : FETCH_ALL_NEWS_FAILURE , 
		payloads : error,
	}
}
const fetchAllNewsFinished = () => {
	return {
		type : FETCH_ALL_NEWS_FINISH,
	}
}
export const clearStore = () => {
	return {
		type : CLEAR_NEWS_STORE,
	}
}

export const fetchAllNews = (index) => {

	return (dispatch) => {
		dispatch(fetchAllNewsRequest());
		axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
				.then((response) => {
					response.data.slice(index, index + 30).map( (storyId) => {
							  axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
												.then(story => {
													dispatch(fetchAllNewsSuccess(story.data));
												}).then(() => {
													dispatch(fetchAllNewsFinished())
												})
												.catch(error => {
													dispatch(fetchAllNewsFailure(error));
												});

					})
				});
	}
} 

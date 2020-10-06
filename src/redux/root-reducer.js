import {combineReducers} from "redux";
import newsReducer from "./news/news-reducer";
import storyReducer from "./story/story-reducer";
export default combineReducers({
	news : newsReducer,
	story : storyReducer,
})
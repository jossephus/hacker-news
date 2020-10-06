import { FETCH_STORY_REQUEST , CLEAR_PREVIOUS_COMMENT , FETCH_STORY_SUCCESS , FETCH_COMMENT_SUCCESS  , FETCH_STORY_FINISH , FETCH_STORY_FAILURE  } from "./story-constants";
const initialState = {
	loading : false,
	story : {} , 
	comments : [] , 
	error : '' 
}

const storyReducer = (state=initialState , action) =>{
	switch(action.type) {
		case FETCH_STORY_REQUEST:
			return {
				...state ,
				loading : true,
			}
		case FETCH_STORY_SUCCESS:
			return {
				...state ,
				story : action.payloads,
				loading : true,
			}
		case FETCH_STORY_FAILURE:
			return {
				...state ,	
				loading : true, 
				error : action.payloads,
			}
		case FETCH_STORY_FINISH:
			return {
				...state ,	
				loading : false, 
				error : action.payloads,
			}
		case FETCH_COMMENT_SUCCESS:
			return {
				...state , 
				comments : [
				...state.comments , {
					comment :  action.payloads.comment , 
					nestingNumber :  action.payloads.nestingNumber,
				}] , 
				loading : true,
			}
		case CLEAR_PREVIOUS_COMMENT:
			return {
				...state , 
				comments : [] , 
				loading : true,
			}
		default:
			return state;
	}
}
export default storyReducer;
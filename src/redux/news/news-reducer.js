import { CLEAR_NEWS_STORE , FETCH_ALL_NEWS_REQUEST , FETCH_ALL_NEWS_SUCCESS  , FETCH_ALL_NEWS_FINISH , FETCH_ALL_NEWS_FAILURE  } from "./news-constant";
const initialState = {
	loading : false,
	news : [] , 
	error : ''
}

const newsReducer = (state=initialState , action) =>{
	switch(action.type) {
		case FETCH_ALL_NEWS_REQUEST:
			return {
				...state ,
				loading : true,
			}
		case FETCH_ALL_NEWS_SUCCESS:
			return {
				...state ,
				news : [ ...state.news , action.payloads],
				loading : true,
			}
		case FETCH_ALL_NEWS_FAILURE:
			return {
				...state ,	
				loading : true, 
				error : action.payloads,
			}
		case FETCH_ALL_NEWS_FINISH:
			return {
				...state ,	
				loading : false, 
				error : action.payloads,
			}
		case CLEAR_NEWS_STORE:
			return initialState;
		default:
			return state;
	}
}
export default newsReducer;
import React , {useEffect , useState  } from "react";
import SingleNews from "../components/news/SingleNews";
import NewsList from "../components/news/NewsList";
import {useSelector , useDispatch} from "react-redux";
import {fetchAllNews , clearStore} from "../redux/news/news-actions.js";
function HomePage(props) {
	const dispatch = useDispatch();
	const  news = useSelector(state => state.news)
	const [index , setIndex] = useState(0)
	useEffect(() => {
		dispatch(fetchAllNews(index));
	} , []);

	const fetchTopNewsController = () => {
		setIndex(prevIndex => prevIndex + 30);
		dispatch(clearStore());
		dispatch(fetchAllNews(index));
	}

	return( 
		<div className="flex-1 py-3  bg-body">
			
			{news.news.length === 0 ? <h1 className="text-center">Loading Stories</h1> : <NewsList news={news.news}/> }
			
			<div className="px-2 py-2 bg-gray-900  text-center text-white ">
				<button className="w-full focus:outline-none " onClick={fetchTopNewsController}>Next</button>
			</div>
		
		</div>
	);
}
export default HomePage;
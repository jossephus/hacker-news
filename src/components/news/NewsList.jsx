import React , {useState} from "react";
import SingleNews from "./SingleNews";
function NewsList({news }) {
	const [index , setIndex] = useState(0);
	const addIndex = () => {
		setIndex(prevIndex => {
			return prevIndex + 1;
		})
	}
	return (
		<> 
		{
			news.map((story , index) => {
				return <SingleNews 
						key={story.id}
						id={story.id}
						index={index + 1} 
						title={story.title} 
						points={story.score} 
						user={story.by} 
						time={story.time}
						commentCount={story.descendants}
						onLoading={addIndex}
				/>
			})
		}

		</>

	);
}
export default NewsList;
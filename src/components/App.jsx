import React from "react";
import {Route , Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import Navbar from "./nav-bar/NavBar";
import {Provider} from "react-redux";
import store from "../redux/store";
function App() {
  return (	
	<div className="h-screen flex flex-col mt-2  mx-32 ">
			<Provider store={store}>
				<Navbar />
			  	<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/news/:storyId" component={NewsPage} />
			  	</Switch>
		  	</Provider >
  		</div>
  	);
}

export default App;

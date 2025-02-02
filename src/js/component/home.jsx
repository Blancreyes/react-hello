import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar";
import JumBotRom from "./jumbotrom";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<div className= "container">
			<div className="row">
				<div className="col">
					<JumBotRom/>
					<Card/>
					<Footer/>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;

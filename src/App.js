import React from "react";
import MainContainer from './components/MainContainer';
import Header from "./components/Header.js";
import ButtonClicker from "./components/ButtonClicker";
import './App.css';

function App() {
 	 return (
  	  	<div className="App">
			<Header></Header>
			<MainContainer>
				<ButtonClicker></ButtonClicker>
			</MainContainer>
			
   		</div>
 	 );
}


export default App;
import React from "react";
import MainContainer from './components/MainContainer';
import Header from "./components/Header.js";
import ButtonClicker from "./components/ButtonClicker";
import Sandbox from "./components/Sandbox";
import './App.css';

function App() {
 	 return (
  	  	<div className="App">
			<Header></Header>
			<MainContainer>
				<ButtonClicker></ButtonClicker>
				<Sandbox></Sandbox>
			</MainContainer>
			
   		</div>
 	 );
}


export default App;
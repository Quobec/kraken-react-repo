import React from "react";
import MainContainer from './components/MainContainer';
import Header from "./components/Header.js";
import ButtonClicker from "./components/ButtonClicker";
import Sandbox from "./components/Sandbox";
import Composition2 from "./components/CompositionAndInheritance";
import './App.css';

function App() {
 	 return (
  	  	<div className="App">
			<Header></Header>
			<MainContainer>
				<ButtonClicker></ButtonClicker>
				<Sandbox>'Children'</Sandbox>
				<Composition2></Composition2>
			</MainContainer>
			
   		</div>
 	 );
}


export default App;
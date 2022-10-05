import React, { useState } from "react";
import './App.css';
import Website from "./Website.js";

function App() {
	
	const [CurrentSite, ChangeSiteVar] = useState('mainSite');
	return (
		<div className="App">
			<Website site={CurrentSite} changeSite={ChangeSiteVar}>
				<button onClick={ () => ChangeSiteVar('aaa')}>Go to aaa</button>
			</Website>
            <button onClick={() => ChangeSiteVar('mainSite')}>Go to Main Site</button>
		</div>
 	);
 	
}

export default App;
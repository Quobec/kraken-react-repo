import React from "react";
import './MainContainer.css';

function MainContainer({children}){
 	return (
        <>
            <div id="mainContainerId">
                {children}
            </div>
        </>
    );
}

export default MainContainer;
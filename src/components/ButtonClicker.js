import React from "react";
import './ButtonClicker.js';

function ButtonClicker(){

    function onButtonClick()
    {
        console.log('button clicked');
    }

 	return (
        <>
            <div id='button_container'>
                <button onClick={onButtonClick}>CLICK</button>
            </div>
            
        </>
    );
}

export default ButtonClicker;
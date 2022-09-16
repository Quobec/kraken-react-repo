import React, { useState } from "react";
import './ButtonClicker.js';

function ButtonClicker(props){

    const [timesClicked, setCount] = useState(0);
    const unreadMessages = timesClicked;

 	return (
        <>
            <div id='button_container'><br/><br/>
                <button onClick={ () => {setCount(timesClicked + 1);}}>CLICK</button> <br/><br/>
                You have clicked this button: {timesClicked} times.<br/><br/>

                {unreadMessages > 0 &&
                    <h2>
                        You have {unreadMessages} unread messages.
                    </h2>
                }
            </div>
        </>
    );
}

export default ButtonClicker;
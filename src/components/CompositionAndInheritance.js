import React from "react";

function Composition1(props){
 	return (
        <>
            <h1 color="red">
                {props.title}
            </h1>

            <p color="blue"> 
                {props.content}
            </p>
        </>
    );
}

function Composition2(){
    return(
        <Composition1 title='welcome' content='this is the content of this element'></Composition1>
    )
}
export default Composition2;
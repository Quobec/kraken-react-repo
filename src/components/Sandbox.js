import React from "react";

function Sandbox(props){

    const numbers = [1,2,3,4,5];
    const list = numbers.map((number) => 
        <li key={number.toString()+'_key'}>{number}</li>
    )

    list.map((element) => 
        console.log(element.key)
    )

 	return (
        <>
            <ul>{list}</ul>
            {props.children}
        </>
    );
}

export default Sandbox;
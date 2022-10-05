import axios from "axios";
import React, { useState, useEffect } from "react";

function Database_data() {
	
	const [data, changedata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/kepiski_jakub/Jakub_kepinski.php').then( (response) => {
        console.log(response)
    
        changedata(response.data.map( (row) => {return row.email;} ));

    
    } );
    }, []);
    console.log(data);  
    console.log(data[0]);
	if(data!=null){
        return(
            <p>{data.join(" ")}</p>
        )
    } else {
        return(
            <p>ehem</p>
        ) 
    }
 	
}

export default Database_data;
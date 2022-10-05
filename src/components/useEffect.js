import React, { useEffect, useState } from "react";

function EffectHook(props){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(document.title === 'React App'){
                document.title = 'button2 clicked ' + count +' times.';
            } else {
                document.title = 'React App';
            }
        }, 500);
        return () => clearInterval(interval);
      }, [count]);

 	return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                {console.log(count)}
            </div>
        </>
    );
}
export default EffectHook;
import React from "react";
import Button from './Button';

function DisplayCount(props){
    return(
        <div>
            {props.count}
            <Button setCount={props.setCount}/>
        </div>
    );
}

export default DisplayCount;
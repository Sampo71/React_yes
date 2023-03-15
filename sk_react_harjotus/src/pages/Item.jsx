import React from "react";

export const Item = (props) =>{
    return(
        <div>
            <h1>Title: {props.title}</h1>
            <p>Description:{props.description}</p>
            <img src={props.img}/>
        </div>
    );
};
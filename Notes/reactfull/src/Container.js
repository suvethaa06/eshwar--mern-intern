import React from "react";
import Users from "./Users";

const Container = ({theme}) => {
    return(
        <div>
            <h1>Container</h1>
            <Users Theme = {theme}/>
        </div>
    )

}

export default Container;
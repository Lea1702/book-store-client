import React from "react";

export const Button = (value, func) => {
    return (
            <button className="screen-button" onClick={(e) => func(e)}>value</button>
    )
};
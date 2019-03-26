import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <h1>{destination}, {country}</h1>
        <h2>{distance} km away</h2>
        <img src={photo} alt=""/>
    </div>
);

export default Travel;
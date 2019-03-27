import React from "react";

const travels = [
    {
        destination: "Melbourne",
        country: "Australia",
        distance: "16 781",
        photo: "https://www.mantrahotels.com/Portals/0/GalleryImages/System/Locations/Australia/Victoria/Melbourne&Surrounds/Melbourne/Melbourne.t76962.jpg"
    },
    {
        destination: "Congo",
        country: "Brazzaville",
        distance: "5 687",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Brazza_bridge.jpg"
    },
    {
        destination: "London",
        country: "United Kingdom",
        distance: "343",
        photo: "https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
    },
    {
        destination: "New York",
        country: "USA",
        distance: "5 834",
        photo: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
    },
    {
        destination: "Tokyo",
        country: "Japan",
        distance: "9 707",
        photo: "https://bonjour-france-japon.com/wp-content/uploads/2018/12/tokyo1.jpg"
    }
]

const Travel = () => (
    <div>
        {travels.map(travel => (
            <div>
                <h1>{travel.destination}, {travel.country}</h1>
                <h2>{travel.distance} km away</h2>
                <img src={travel.photo} alt="" />
            </div>
        ))
        }
    </div>

);

export default Travel;
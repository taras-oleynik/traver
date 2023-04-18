import React from "react"

export default function Main(props) {
    return (
        <main>
          <div className="main-image">
          <img src={props.item.imageUrl}/>
          </div>
          <div className="main-desc">
            <div className="location">
                <img src="../images/location-icon.png"className="location-icon"/>
                <p className="country">{props.item.location}</p>
                <p className="gmap"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
            </div>
            <h2>{props.item.title}</h2>
            <p className="dates"><span className="start-date">{props.item.startDate}</span> <span className="end-date">- {props.item.endDate}</span></p>
            <p className="about">{props.item.description}</p>     
          </div>
          
        </main>
    )
}
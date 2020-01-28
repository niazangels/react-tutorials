import './SeasonDisplay.css'
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun outline"
    },
    winter: {
        text: "Brr.. It's chilly!",
        iconName: "snowflake outline"
    }
}

const getSeason = (lat, month) => {
    if (lat > 0) {
        return (month > 2 && month < 9) ? "summer" : "winter";
    }
    else {
        return (month > 2 && month < 9) ? "winter" : "summer";
    }
}

const SeasonDisplay = props => {
    const month = new Date().getMonth()
    const season = getSeason(props.lat, month)
    const { text, iconName } = seasonConfig[season]

    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} ></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} ></i >
    </div >
}

export default SeasonDisplay;
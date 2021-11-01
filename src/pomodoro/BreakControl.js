import React from "react"
import {minutesToDuration} from "../utils/duration"

function BreakControl ( {breakDuration, breakDecrease, breakIncrease, session}) {
    return (
        <div className="col">
        <div className="float-right">
            <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
                {/* Display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)} 
            </span>
            <div className="input-group-append">
                 {/* Implement decreasing break duration and disable during a focus or break session */}
                <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick = {breakDecrease}
                disabled = {breakDuration === 1 || session}
                >
                <span className="oi oi-minus" />
                </button>
                {/* Implement increasing break duration and disable during a focus or break session*/}
                <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick = {breakIncrease}
                disabled = {breakDuration === 15 || session}
                >
                <span className="oi oi-plus" />
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BreakControl;
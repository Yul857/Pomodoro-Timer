import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionTimer({ session, focusDuration, breakDuration }) {
  return (
    session && (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* Include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {session.label === "Focusing"
                ? minutesToDuration(focusDuration)
                : minutesToDuration(breakDuration)}{" "}
              minutes
            </h2>
            {/* Format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                /* Increase aria-valuenow as elapsed time increases */
                aria-valuenow={
                  100 -
                  (100 * session.timeRemaining) /
                    (session.label === "Focusing"
                      ? focusDuration * 60
                      : breakDuration * 60)
                }
                //Increase width % as elapsed time increases
                style={{
                  width: `${
                    100 -
                    (100 * session.timeRemaining) /
                      (session.label === "Focusing"
                        ? focusDuration * 60
                        : breakDuration * 60)
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default SessionTimer;

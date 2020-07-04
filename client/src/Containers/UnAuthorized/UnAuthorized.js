import React from "react";
import "./UnAuthorized.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";

const UnAuthorized = () => {
    return (
        <div className="UnAuthorized">
            <div className="Info">
                <div className="Trekant">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <div className="Text">
                    <h2>You are not an admin!</h2>
                </div>
                <div
                    className="Button"
                    onClick={() => {
                        window.location.replace("/");
                    }}
                >
                    Go back to homepage.
                </div>
            </div>
        </div>
    );
};

export default UnAuthorized;

import React from "react";
import "./style.css";

function Row(props) {
    return <div className={`row small-up-${props.small} medium-up-${props.medium} large-up-${props.large}`}{...props} />;
}

export default Row;
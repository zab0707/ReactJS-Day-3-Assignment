import React from 'react';

import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

import "./Icon.css";

class Icon extends React.Component{
    render(){
        const choice = this.props.choice;
        switch (choice) {
            case "cross":
                return <FaTimes className="icon" />;
            case "circle":
                return <FaRegCircle className="icon" />
            default:
                return <FaPen className="icon" />;
        }
    }
}

export default Icon;
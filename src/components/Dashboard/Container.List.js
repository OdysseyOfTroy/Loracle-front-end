import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

function ContainerList(props) {
    const setCurrentId =  props.setCurrentId;
    
    return (
        <Link to={props.path} className="sidebar-Link">
            <span>
                {props.id}
                {props.title}
                {props.description}
            </span>
        </Link>
    )

}

export default ContainerList;
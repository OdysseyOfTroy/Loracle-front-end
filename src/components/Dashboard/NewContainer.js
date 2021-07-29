import React, { useState } from "react";
import DashboardService from "../Connections/Dashboard.service";

function newContainer(props) {
    //defines getters and setters used by component
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const saveContainer = () => {
        return DashboardService.create(title, description)
    };

    

}
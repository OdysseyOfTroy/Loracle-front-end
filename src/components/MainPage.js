import React from "react";
import Sidebar from "./Sidebar.component";

function MainPage() {
    return (
    <div className="Nav">
        <Sidebar width={200} height={"100vh"}>
            <p>Nav item</p>
            <p>Nav item</p>
            <p>Nav item</p>
            <p>Nav item</p>
        </Sidebar>
    </div>
       );
}

export default MainPage;
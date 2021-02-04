import React from "react";
import Sidebar from "./Sidebar.component";
import "../css/Mainpage.css"

function MainPage() {
    return (
    <div className="Nav">
        <Sidebar width={200} height={"100vh"}>
            <div className="category"> group 
                <p className="Identifier">Nav item</p>
                <p classname="Identifier">Nav item</p>
            </div>

            <div className="category"> group
                <p classname="Identifier">Nav item</p>
                <p classname="Identifier">Nav item</p>
                <p classname="Identifier">Nav item</p>
            </div>
        </Sidebar>
    </div>
       );
}

export default MainPage;
import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../css/Pro-sidebar.css';
import '../css/Mainpagealt.css';
import { Jumbotron } from "react-bootstrap";


function MainPage() {
    return (
<<<<<<< HEAD
    <div className="Nav">
        <Sidebar width={200} height={"100vh"}>
            <div className="category"> group 
                <p className="Identifier">Nav item</p>
                <p className="Identifier">Nav item</p>
            </div>

            <div className="category"> group
                <p className="Identifier">Nav item</p>
                <p className="Identifier">Nav item</p>
                <p className="Identifier">Nav item</p>
            </div>
        </Sidebar>
=======
    <div> 
        <div className="page">
            <ProSidebar >
                <Menu iconShape="square">
                    <MenuItem>Containers</MenuItem>
                    <SubMenu title="Component 1">
                        <SubMenu title="Identifier">
                            <MenuItem>information 1</MenuItem>
                            <MenuItem>information 2</MenuItem>
                        </SubMenu>
                        <SubMenu title="Identifier 2">
                            <MenuItem> information 1</MenuItem>
                            <MenuItem> information 2</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu title="Component 2"> 
                        <SubMenu title="Identifier 1">
                            <MenuItem> information 1</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <Jumbotron className="main">
            <h1>dhusabdajdbnsakjdbaiubd</h1>
        </Jumbotron>
        </div>

>>>>>>> main
    </div>
       );
}

export default MainPage;
import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../css/Pro-sidebar.css';
import '../css/Mainpagealt.css';
import { Jumbotron } from "react-bootstrap";


function MainPageAlt() {
    return (
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

    </div>
       );
}

export default MainPageAlt;
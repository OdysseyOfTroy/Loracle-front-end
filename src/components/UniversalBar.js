import React from "react";
import AuthenticationService from "./Connections/Authentication.service";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../css/uniBar.css";

function Universalbar() {
  const logout = () => {
    AuthenticationService.logout();
    window.location.replace("/");
  };

  return (
    <Navbar className="bg-black w-100 d-inline-flex justify-content-end p-0 mb-lg-2">
      <Button className="logout-btn" onClick={logout}>
        log out
      </Button>
    </Navbar>
  );
}

export default Universalbar;

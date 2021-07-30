import React from "react";
import AuthenticationService from "./Connections/Authentication.service";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Universalbar() {

  const logout = () => {
    AuthenticationService.logout();
    window.location.replace("/");
  }

  return (
    <Navbar className="bg-primary w-100 d-inline-flex justify-content-between p-0 mb-lg-2">
      <Button onClick={logout}>
        log out
      </Button>
    </Navbar>
  )
}

export default Universalbar;
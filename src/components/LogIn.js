import React, { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import AuthenticationService from "./Connections/Authentication.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    AuthenticationService.login(email, password)
      .then(() => {
        window.location.replace("/Home");
      })
  },
  [email, password]
  );

  return (
    <div className="page">
    <div className="Background">
    </div>
      <div className="Login-Container">
    <div >
        <h1 className="Title">Loracle</h1>
    </div>
    <div className="Login">
      <Form onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>

      </Form>
    </div>
    </div>

    </div>
  );
}
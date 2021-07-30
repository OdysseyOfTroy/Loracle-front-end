import React, { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css"
import "../css/Signup.css";
import AuthenticationService from "./Connections/Authentication.service";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const onSubmit = useCallback(
    (e) => {
    e.preventDefault();

    AuthenticationService.register(
      displayName,
      email,
      password,
      passwordConfirmation
    )
    .then(() => {
      window.location.replace("/");
    })
  })

  return (
    <div className="page">
      <div className="Background">
      </div>
      <div className="signup-Container">
        <div >
          <h1 className="Title">Loracle</h1>
        </div>
        <div className="Signup">

          <Form onSubmit={onSubmit}>

            <Form.Group size="lg" controlId="display_name">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                autoFocus
                type="Display_name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Form.Group>

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

            <Form.Group size="lg" controlId="passwordconfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Create Account
            </Button>

            <Button block size="lg" to="/" as={Link}>
              Return to Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
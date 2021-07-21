import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "../css/Login.css";

export default function SignUp() {
  const [display_name, setDisplay_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [dob, setDob] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup">

      <Form onSubmit={handleSubmit}>


        <Form.Group size="lg" controlId="display_name">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
                autoFocus
                type="Display Name"
                value={display_name}
                onChange={(e) => setDisplay_Name(e.target.value)}
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

        <Form.Group size="lg" controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <div className="dob">
            <DatePicker
            selected={dob}
            onChange={date => setDob(date)}
            />
        </div>
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
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
        
      </Form>
    </div>
  );
}
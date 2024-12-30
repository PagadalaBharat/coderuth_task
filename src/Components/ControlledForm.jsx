import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const HandleSubmit = (e) => {
  e.preventDefault();
};

function ControlledForm() {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [rememberMe, setRememberMe] = useState(" ");
  const [serverError, setServerError] = useState(false);
  const userNameValidation = (userName) => {
    let validUsername = false;
    if (userName.length > 10) {
      validUsername = false;
    } else {
      validUsername = true;
    }
    return validUsername;
  };
  const userNameHandler = (e) => {
    e.preventDefault();
    const userEnteredUserName = e.target.value;
    console.log(userEnteredUserName);
    setUserName(userEnteredUserName);
    if (userNameValidation(userEnteredUserName)) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }
  };
  const passwordvalidation = (password) => {
    let validPassword = false;
    if (password.length > 8) {
      validPassword = true;
    } else {
      validPassword = false;
    }
    return validPassword;
  };

  const passwordHandler = (e) => {
    const userEnteredPassword = e.target.value;
    setPassword(userEnteredPassword);
    console.log(userEnteredPassword);
    if (passwordvalidation(userEnteredPassword)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !userNameError) {
     
      apiCall(userName, password);
    }
  };

  const apiCall = (email, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json()) 
      .then((data) => {
        console.log(data);
        if (data.message) {
          setServerError(data.message);
        } else {
          setServerError(false);
       
          alert("login sucessful");
        }
      })

    
      .catch((err) => console.error(err)); 
  };
  return (
    <Form onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={userName}
          onChange={userNameHandler}
        />
        {userNameError && <span style={{ color: "red" }}>invalid user</span>}
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        {passwordError && (
          <span style={{ color: "red" }}>invalid password</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" value={rememberMe} />
      </Form.Group>
      {serverError && <span style={{ color: "red" }}>Invalid credentials</span>}
      {!userNameError && !passwordError && (
        <Button variant="primary" type="submit" onClick={HandleSubmit}>
          Submit
        </Button>
      )}
    </Form>
  );
}

export default ControlledForm;

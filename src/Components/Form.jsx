import { space } from 'postcss/lib/list';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Welcome from './welcome';
import "./Formdata.css"
function SignInForm() {
    const [useremail,setuseremail]=useState("")
    const [emailnotice , setemailnotice]=useState(false)
    const [userpassword,setuserpassword]=useState("")
    const [passwordnotice,setpasswordnotice]=useState(false)
    const [serverError,setServerError]=useState(false)
    // const [remember,setremember]=useState("")
    const[islogin,setislogin]=useState(false)

    function emailvalidation(username){
        let flag=false
        if(username.length > 10){
            flag=false
        }else{
            flag=true
        }
        return flag
    }

    const emalihandler=(e)=>{
       const userenteredemail=e.target.value
        setuseremail(userenteredemail)
        console.log(useremail)
        
        if (emailvalidation(userenteredemail)){
            setemailnotice(false)
        }else{
            setemailnotice(true)
        }
    }

    function passwordvalidation(password){
        let flag=false;
        if(password.length < 8){
            flag=true
        }else{
            flag=false
        }
        return flag
    }

    function passwordhandler(e){
        const userenteredpassword=e.target.value
        setuserpassword(userenteredpassword)
        // console.log(userenteredpassword)
        if(passwordvalidation(userenteredpassword)){
            setpasswordnotice(true)
        }else{
            setpasswordnotice(false)
        }

    }

    function handlesubmit(e){
        e.preventDefault();
        if(!emailnotice && !passwordnotice){
            //hit the server
            apicall(useremail,userpassword)
        }

    }

    const apicall=(email,password)=>{
        fetch("https://dummyjson.com/auth/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: email,
              password: password,
              expiresInMins: 30,
            }),
          }) .then((res) => res.json()) // Fix: Correct method to parse JSON.
          .then((data) => {
            console.log(data);
            if (data.message) {
              setServerError(data.message);
            } else {
              setServerError(false);
              //user exist in the database
              alert("login sucessful");
             setislogin(true)

            }
          })
    
          // Fixed chain function call.
          .catch((err) => console.error(err));
    }

  return (
    islogin?< Welcome />:(
<div className="container">



   <h2 > Access premium content by signing in. </h2>
    <Form onSubmit={handlesubmit}  className='formdata'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  value={useremail} onChange={emalihandler} />
        {emailnotice && <span>invalid email</span> }
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={userpassword} onChange={passwordhandler}  />
        {passwordnotice && <span>password should be more than 8 charactors</span> }
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {serverError && <span>{serverError}</span> }
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
)
  );
}

export default SignInForm;
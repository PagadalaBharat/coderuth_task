import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "../App.css"
function ContactForm() {
  return (
    <>
    <Form className='contactform'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
     <Button variant="primary">Contact Us</Button>
    </Form>
     </>

  );
}

export default ContactForm;
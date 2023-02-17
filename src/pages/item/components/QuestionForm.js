import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import '../ItemPage.scss';

function QuestionForm() {
  return (
    <div className='form__wrapper'>
        <h1>Ask a question about product</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Question Goes Here:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="success" onClick={()=>alert("There's no API. It is a demo!")}>Submit</Button>
    </Form>
    </div>
  );
}

export default QuestionForm;
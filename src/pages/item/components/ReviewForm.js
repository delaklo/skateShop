import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import '../ItemPage.scss';

function ReviewForm() {
  return (
    <div className='form__wrapper'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Advantages</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Disadvantages</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Commentary</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="success" onClick={()=>alert("There's no API. It is a demo!")}>Submit</Button>
    </Form>
    </div>
  );
}

export default ReviewForm;
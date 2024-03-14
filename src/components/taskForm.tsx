import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export function TaskForm() {
  return (
    <Container>
      <Form className='mb-3'>
      <Form.Group  controlId="validationCustom01">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group   controlId="validationCustom02">
          <Form.Label>Idade: </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Idade"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group   controlId="validationCustom02">
          <Form.Label>Renda: </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Renda"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Form>
    </Container>
  )
}
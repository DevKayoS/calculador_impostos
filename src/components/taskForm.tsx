import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import { useFormik } from 'formik';

export function TaskForm({onSubmit}) {

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      income: ""
    },
    validate: (values) => {
      const errors = {}

      if(!values.name){
        errors.name = "O Campo nome é obrigatório"
      }
      if(!values.age){
        errors.age = "O Campo Idade é obrigatório"
      }
      if(!values.income){
        errors.income = "O Campo renda é obrigatório"
      }

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values)
    }
 
  })
  return (
    <Container>
      <Form className='mb-3' onSubmit={formik.handleSubmit}>
      <Form.Group  controlId="validationCustom01">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Nome"
            onChange={formik.handleChange}
            helperText={formik.errors.name}
            value={formik.values.name}
            error={Boolean(formik.errors.name)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group   controlId="validationCustom02">
          <Form.Label>Idade: </Form.Label>
          <Form.Control
            required
            type="number"
            name="age"
            placeholder="Idade"
           onChange={formik.handleChange}
           helperText={formik.errors.age}
           value={formik.values.age}
           error={Boolean(formik.errors.age)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group   controlId="validationCustom02">
          <Form.Label>Renda: </Form.Label>
          <Form.Control
            required
            type="number"
            name="income"
            placeholder="Renda"
           onChange={formik.handleChange}
           helperText={formik.errors.income}
           value={formik.values.income}
           error={Boolean(formik.errors.income)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="mt-3">Calcular</Button>
      </Form>
    </Container>
  )
}
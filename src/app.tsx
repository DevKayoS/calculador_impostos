import { TaskForm } from "./components/taskForm";
import { TaskReport } from "./components/taskReport";
import Container from 'react-bootstrap/Container';


export function App() {
  

  return (
    <div>
    <Container className="d-flex flex-column align-items-center border border-secondary rounded mt-3">
       <h3>Calculadora de impostos</h3>
       <TaskForm/>
    </Container>
     <TaskReport/>
     </div>
  )
}



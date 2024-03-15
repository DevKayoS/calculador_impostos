import { TaskForm } from "./components/taskForm";
import { TaskReport } from "./components/taskReport";
import Container from 'react-bootstrap/Container';

import {useState} from 'react'

export function App() {
  const [taxData, setTaxData] = useState(null)

  const calculateTax = (values: string ) => {
   let tax = 0

   const income = parseFloat(values.income)

   if (income <= 10000){
    tax = income * 0.05;
   } else if (income <= 20000){
    tax = income * 0.1;
   } else {
    tax = income * 0.15;
   }

   const taxData = {
    ...values,
    tax
   }

   setTaxData(taxData)
  }

  return (
    <div>
    <Container className="d-flex flex-column align-items-center border border-secondary rounded mt-3">
       <h3>Calculadora de impostos</h3>
       <TaskForm onSubmit={calculateTax}/>
    </Container>
     {taxData && <TaskReport taxData={taxData}/> }
     </div>
  )
}



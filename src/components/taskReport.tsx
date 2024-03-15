import Container from 'react-bootstrap/Container';

export function TaskReport({taxData}) {
  return (
    <div>
      <Container>
        <h5>Relatório de impostos</h5>
        <p>Nome: {taxData.name} </p>
        <p>Idade: {taxData.age} anos</p>
        <p>Renda: {parseFloat(taxData.income).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL"
        })} </p>
        <p>Imposto a pagar: {parseFloat(taxData.tax).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL"
        })} </p>
      </Container>
    </div>
  )
}
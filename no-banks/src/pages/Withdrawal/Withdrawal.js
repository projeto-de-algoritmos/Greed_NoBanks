import React, {useState} from "react";
import { Button, Card, CardBody, CardHeader, Input, InputGroup, InputGroupText, Label} from "reactstrap";
import "./Withdrawal.css"

import { data } from "../../utils/Data";


function SacarComSaldo(saldo, saque) {
  const cedulasDisponiveis = [1, 2, 5, 10, 20, 50, 100, 200];
  cedulasDisponiveis.sort((a, b) => b - a);

  const resultado = {};
  let saqueRestante = saque;

  if (saque > saldo) {
    return alert("Saldo Insuficiente");
  }

  for (const cedula of cedulasDisponiveis) {
    const quantidadeCedulas = Math.floor(saqueRestante / cedula);
    if (quantidadeCedulas > 0) {
      resultado[cedula] = quantidadeCedulas;
      saqueRestante -= quantidadeCedulas * cedula;
    }
  }

  return {
    saldoRestante: saldo - saque,
    cedulas: resultado
  };
}

const Withdrawal = (args) => {
  const [saldo, setSaldo] = useState(data[0].saldo); // Defina o saldo inicial
  const [valorSaque, setValorSaque] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [modal, setModal] = useState(false)
  

  const handleSaque = () => {
    const resultadoSaque = SacarComSaldo(saldo, valorSaque);
    setResultado(resultadoSaque);
  };

  const toggle = () => setModal(!modal)

  return (

    <div className="withdrawal">
     
      <div className="withdrawal-input">
        <Label>DIGITE O VALOR QUE DESEJA SACAR:</Label>
        <InputGroup >
          <InputGroupText>$</InputGroupText>
          <Input
            onChange={(e) => setValorSaque(e.target.value)}
          />
          <InputGroupText>,00</InputGroupText>
          <Button color="primary" onClick={() => {handleSaque(); toggle()}} className="deposit-button">Sacar</Button>
        </InputGroup>
      </div>
      <div>
        <p style={{ textAlign: "center", marginTop: "2em", color: "red" }}>NOTAS DISPONÍVEIS:
        
        <li>R$1,00&nbsp;&nbsp;&nbsp;&nbsp;R$2,00</li> 
        <li>&nbsp;R$5,00&nbsp;&nbsp;&nbsp;&nbsp; R$10,00</li>
        <li>R$20,00&nbsp;&nbsp;&nbsp;&nbsp;R$50,00</li>
        <li>R$100,00&nbsp;&nbsp;&nbsp;&nbsp;R$200,00</li>
        <li></li></p>
      </div>
      <div style={{ textAlign: "center", justifyContent:'center', display: 'flex' }}>
        {resultado && (
        <Card className="withdrawal-card" sm='6' style={{ width: '18rem'}}>
          <CardHeader tag="h4">Resultado do Saque:</CardHeader>
          <CardBody>
            <ul style={{ justifyContent: "center"}}>
              {Object.keys(resultado.cedulas).map((cedula) => (
                <li key={cedula}>
                  {resultado.cedulas[cedula] === 1 && (
                    <p>{resultado.cedulas[cedula]} cédula de R$ {cedula}</p>
                  )}
                  {resultado.cedulas[cedula] > 1 && (
                    <p>{resultado.cedulas[cedula]} cédulas de R$ {cedula}</p>
                  )}
                </li>
              ))}
            </ul>
            <p style={{ textAlign: "flex-end"}}>Saldo Restante: R$ {resultado.saldoRestante}</p>
          </CardBody>
        </Card>
        )}
        </div>
    </div>
  );
};

export default Withdrawal;
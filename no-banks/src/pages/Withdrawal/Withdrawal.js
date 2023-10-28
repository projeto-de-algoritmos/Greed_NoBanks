import { Button, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import "./Withdrawal.css"

import { data } from "../../utils/data";

const Withdrawal = () => {
  return (

    <div className="withdrawal">
     
      <div className="withdrawal-input">
        <Label>DIGITE O VALOR QUE DESEJA SACAR</Label>
        <InputGroup >
          <InputGroupText>$</InputGroupText>
          <Input
            placeholder="Enter Deposit"
            min="3"
            max="100"
          />
          <Button className="deposit-button">Sacar</Button>
        </InputGroup>
      </div>
      <div>
        <p style={{ textAlign: "center", marginTop: "2em", color: "red" }}>NOTAS DISPONÍVEIS:
        <li>R$1,00&nbsp;&nbsp;&nbsp;&nbsp;R$2,00</li> 
        <li>R$5,00&nbsp;&nbsp;&nbsp;&nbsp; R$10,00</li>
        <li>R$20,00&nbsp;&nbsp;&nbsp;&nbsp;R$50,00</li>
        <li>R$100,00&nbsp;&nbsp;&nbsp;&nbsp;R$200,00</li>
        <li></li></p>
      </div>
    </div>
  );
};

export default Withdrawal;
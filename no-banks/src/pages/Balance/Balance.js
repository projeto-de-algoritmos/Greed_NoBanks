import { Button, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardHeader} from "reactstrap";
import './Balance.css'
import { data } from "../../utils/Data";

const Balance = () => {
    const formatCurrency = (amount) => {
      return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
    
      <div className="balance">
        <Card sm='6' style={{ width: '30rem'}}>
          <CardHeader tag="h4" style={{ textAlign: 'center' }}>Dados Pessoais</CardHeader>
          <img
          alt="Sample"
          src="/assets/userImage.png" 
          width="30%"/>
      <CardBody>
        <CardTitle>{data[0].name}</CardTitle>
        <CardSubtitle>Idade: {data[0].age} anos</CardSubtitle>
        <CardText>
          Número de Telefone: {data[0].Cellphone}
          <br />
          Saldo Bancário: {formatCurrency(data[0].saldo)}
        </CardText>
      </CardBody>
    </Card>
      </div>
    );
  };
  
  export default Balance;
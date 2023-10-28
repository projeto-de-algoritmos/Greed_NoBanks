import { Button, Row, Col, Card, CardBody } from "reactstrap";
import './Home.css'
import { Link } from "react-router-dom";


const Home = () => {
    return (

        <div className="home">
            <Row>
                <Col md='4'>
                    <Card className="left-card">
                        <CardBody>
                        <form action="/Withdrawal" method="get">
                            <button className="home-button" formAction="/Withdrawal">SACAR</button>
                        </form>
                        </CardBody>
                    </Card>
                    
                </Col>
                <Col md='4'>
                    <Card className="right-card">
                        <CardBody>
                        <form action="/Balance" method="get">
                            <button className="home-button" formAction="/Balance">CONSULTAR CONTA</button>
                        </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="4">
                    <Card className="left-card">
                    <form action="/Deposit" method="get">
                            <button className="home-button" formAction="/Deposit">DEPOSITAR</button>
                        </form>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className="right-card">
                        <form action="https://github.com/eng-Bruno" method="get" target="_blank">
                            <button className="home-button" formAction="https://github.com/eng-Bruno">INFORMAÇÕES DA CONTA</button>
                        </form>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Home;
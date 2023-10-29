import { Button, Row, Col, Card, CardBody } from "reactstrap";
import './Home.css'
import { Link } from "react-router-dom";


const Home = () => {
    return (

        <div className="home">
            <Row>
                <Col>
                    <form action="/Withdrawal" method="get">
                        <button className="home-button" formAction="/Withdrawal">SACAR</button>
                    </form>
                </Col>
                <Col>
                    <form action="/Balance" method="get">
                        <button className="home-button" formAction="/Balance">CONSULTAR CONTA</button>
                    </form>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <form action="/Deposit" method="get">
                        <button className="home-button" formAction="/Deposit" disabled>DEPOSITAR</button>
                    </form>
                </Col>
                <Col>
                    <form action="https://github.com/eng-Bruno" method="get" target="_blank">
                        <button className="home-button" formAction="https://github.com/eng-Bruno">TRANSFERÊNCIA</button>
                    </form>
                </Col>
            </Row>

        </div>
    );
};

export default Home;
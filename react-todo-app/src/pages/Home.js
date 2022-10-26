import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <Row>
            <Col>
                <h1>Hello World !</h1>
                <NavLink to="/tasks" className="btn btn-primary">Accéder a la liste des tâches</NavLink>
            </Col>
        </Row>
    )
}

export default Home;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TokenContext from '../contextes/TokenContext';
function Home() {
    return (
        <Row>
            <Col>
                <TokenContext.Consumer>
                    {
                        token => (
                            token
                        )
                    }
                </TokenContext.Consumer>
                <h1>Hello World !</h1>
            </Col>
        </Row>
    )
}

export default Home;
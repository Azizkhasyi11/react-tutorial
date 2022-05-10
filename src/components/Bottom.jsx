{/* Make a components for ending of the page using react-bootstrap */ }
import { Container, Row, Col } from 'react-bootstrap';

const Bottom = () => {
    return (
        <Container fluid className="bottom">
            <Row>
                <Col>
                    <p>
                        &copy; 2020 -
                        <a href="
                        https://www.linkedin.com/in/
                        " target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </p>
                </Col>
                <Col>
                    <p>
                        &copy; 2020 -
                        <a href="
                        https://www.github.com/
                        " target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bottom;
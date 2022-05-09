import { Card, Container, Col, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className="text-dark text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/dune.jpg?raw=true"
                alt="Dune Image"
                width="50%"
                height="auto"
              />
                <Card.Title>Title</Card.Title>
                <Card.Text>BRUH</Card.Text>
                <Card.Text>Ok</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

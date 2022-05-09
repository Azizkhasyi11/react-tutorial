import { Card, Container, Col, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center mt-4" id="trending">Trending Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/dune.jpg?raw=true"
                alt="Dune Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/everything.jpg?raw=true"
                alt="Everything Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/infinite.jpg?raw=true"
                alt="Infinite Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/joker.jpg?raw=true"
                alt="Joker Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/lightyear.jpg?raw=true"
                alt="Lightyear Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-dark text-white text-center movieImage">
              <Image
                src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/morbius.jpg?raw=true"
                alt="Morbius Image"
                className="trendImg"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Title</Card.Title>
                <Card.Text className="text-left">
                  lorao naoaejpin oidhwo aponeipjep aijdpiejfikf aijvpicnieffc
                  lnianvjifn{" "}
                </Card.Text>
                <Card.Text className="text-left">Lats u</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

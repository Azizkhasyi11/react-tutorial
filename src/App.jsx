import { Container, Row, Col} from "react-bootstrap"

import "./App.css";
import "./style/LandingPage.css";

import NavigationBar from "./components/NavigationsBar";

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <NavigationBar />
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title">NONTON GRATIS</div>
                <div className="title">GAK PAKE KARCIS</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* End of Intro */}
    </div>
  );
}

export default App;

import "./App.css";
import "./style/LandingPage.css";

// Import componentns
import NavigationBar from "./components/NavigationsBar";
import Intro from "./components/Intro"

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}
    </div>
  );
}

export default App;

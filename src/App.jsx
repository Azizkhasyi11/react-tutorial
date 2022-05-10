import "./App.css";
import "./style/LandingPage.css";

// Import componentns
import NavigationBar from "./components/NavigationsBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* End of Trending */}

      {/* Trending */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End of Trending */}

      {/* Bottom */}
      <Bottom />
      {/* End of Bottom */}
    </div>
  );
}

export default App;

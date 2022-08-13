// pages
import Landing from "./pages/Landing/Landing";

// components
import Nav from "../src/components/Nav";

// style
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Landing />
      </div>
    </>
  );
}

export default App;

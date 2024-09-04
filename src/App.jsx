import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <button className="btn btn-primary">Bootstrap Button</button>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

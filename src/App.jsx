import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

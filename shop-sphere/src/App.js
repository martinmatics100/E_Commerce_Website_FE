import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Search from "./components/Search";
import Header from "./components/Header/Header";

function App() {
  return (
    // <Search />
    <Header />
  );
}

export default App;

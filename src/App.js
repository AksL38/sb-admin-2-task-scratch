import "./App.css";
import "./sb-admin-2.css";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function App() {
  return (
    <>
      <Router>
        <Sidebar></Sidebar>
        <Topbar></Topbar>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import ListUser from "./components/pages/ListUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/listuser" exact element={<ListUser />} />
          <Route path="/add" exact element={<Add />} />
          <Route path="/edit" exact element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

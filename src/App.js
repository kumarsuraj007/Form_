import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegForm from "./RegLog_Form/Reg";
import LogForm from "./RegLog_Form/Log";
import Home from "./RegLog_Form/Home";

function App() {
  const [user, setLoginuser] = useState({});
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Routes>
            {/* <Route exact path="/">
            </Route> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<RegForm />} />
            <Route path="/signin" element={<LogForm />} />
          </Routes>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Routers/Home";
import Contact from "./Routers/Contact";
import AddNewOne from "./Routers/AddNewOne";
import Table from "./Routers/Table";
import { Route, Routes } from "react-router-dom";
// import Student from './Routers/Student';
// import ContextData from './Routers/ContextData';
import Edit from "./Routers/Edit";
import { Provider } from "react-redux";
import store from "./Routers/store";

function App() {
  // const [data, setData] = useState();

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Student" element={<Table />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/addnewone" element={<AddNewOne />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

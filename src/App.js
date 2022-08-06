import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ResourceDetailComponent from "./components/ResourceDetailComponent";
import AddResourceItem from "./components/AddResourcePage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/resourcepage/:id/"
          element={<ResourceDetailComponent />}
        />
        <Route exact path="/addResource" element={<AddResourceItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

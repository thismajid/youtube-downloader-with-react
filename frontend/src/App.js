import "./App.css";
import Inputs from "./components/Inputs/Inputs";
import Navbar from "./components/Navbar/Navbar";
import Download from "./components/Download/Download";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <div className={isLoading ? "" : "d-none"} id="overlay"></div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/download" component={Download} />
        <Route
          path="/"
          exact
          render={(props) => <Inputs setIsLoading={setIsLoading} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

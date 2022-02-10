import "./App.css";
import Inputs from "./components/Inputs/Inputs";
import Navbar from "./components/Navbar/Navbar";
import Download from "./components/Download/Download";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";

function App() {
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
      <Navbar></Navbar>
      <Switch>
        <Route path="/download" component={Download} />
        <Route path="/" exact component={Inputs} />
      </Switch>
    </div>
  );
}

export default App;

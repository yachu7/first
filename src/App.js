import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const removeBg = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  const toggleMode = (cls) => {
    removeBg();
    document.body.classList.add("bg-" + cls);

    switch (cls) {
      case "primary":
        setMode("primary");
        showAlert("Blue", "success");
        break;
      case "warning":
        setMode("warning");
        showAlert("Yellow", "success");
        break;
      case "danger":
        setMode("danger");
        showAlert("Red", "success");
        break;
      case "success":
        setMode("success");
        showAlert("Blue", "success");
        break;
      case "light":
        setMode("light");
        showAlert("White", "success");
        break;
      case "dark":
        setMode("dark");
        showAlert("Dark", "success");
        break;

      default:
        setMode("light");

        showAlert("Light Mode", "success");
    }

    // if (mode === "light" ) { // toggle function for light and dark mode
    //   setMode("dark");

    //   showAlert("Dark Mode", "success");
    // }
    //  else {
    //   setMode("light");

    //   showAlert("Light Mode", "success");
    // }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Utils"
          aboutPage=" About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element= < About /> />
            {/* <About /> */}
            
            <Route
              path="/"
              element= 
              < TextForm
                title="Enter Text Here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            />
            {/* <TextForm
                title="Enter Text Here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

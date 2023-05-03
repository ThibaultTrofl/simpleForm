import { useState } from "react";
import Form from "./components/Form.jsx";
import StepTwo from "./components/StepTwo.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [secondStep, setSecondStep] = useState(false);
  const [alertFirstName, setAlertFirstName] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertSecondPassword, setAlertSecondPassword] = useState(false);

  return (
    <>
      <main>
        {secondStep === false ? (
          <Form
            firstName={firstName}
            setFirstName={setFirstName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secondPassword={secondPassword}
            setSecondPassword={setSecondPassword}
            secondStep={secondStep}
            setSecondStep={setSecondStep}
            alertFirstName={alertFirstName}
            setAlertFirstName={setAlertFirstName}
            alertEmail={alertEmail}
            setAlertEmail={setAlertEmail}
            alertPassword={alertPassword}
            setAlertPassword={setAlertPassword}
            alertSecondPassword={alertSecondPassword}
            setAlertSecondPassword={setAlertSecondPassword}
          />
        ) : (
          <StepTwo
            secondStep={secondStep}
            setSecondStep={setSecondStep}
            name={firstName}
            email={email}
            password={password}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

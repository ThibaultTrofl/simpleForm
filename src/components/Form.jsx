import CustomInput from "./CustomInput.jsx";

const Form = ({
  firstName,
  setFirstName,
  email,
  setEmail,
  password,
  setPassword,
  secondPassword,
  setSecondPassword,
  secondStep,
  setSecondStep,
  setAlertFirstName,
  alertFirstName,
  setAlertEmail,
  alertEmail,
  setAlertPassword,
  alertPassword,
  setAlertSecondPassword,
  alertSecondPassword,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault(event);
    if (firstName && email && password === secondPassword) {
      setSecondStep(!secondStep);
    } else {
      if (!firstName) {
        setAlertFirstName((alertFirstName = true));
      } else if (firstName) {
        setAlertFirstName((alertFirstName = false));
      }
      if (!email) {
        setAlertEmail((alertEmail = true));
      } else if (email) {
        setAlertEmail((alertEmail = false));
      }
      if (!password) {
        setAlertPassword((alertPassword = true));
      } else if (password) {
        setAlertPassword((alertPassword = false));
        if (password !== secondPassword) {
          setAlertSecondPassword((alertSecondPassword = true));
        } else {
          setAlertSecondPassword((alertSecondPassword = false));
        }
      }
    }
  };

  return (
    <>
      <section className="container">
        <div className="box">
          <h1>Create account</h1>
          <form className="form-box" onSubmit={handleSubmit}>
            <CustomInput
              idName="First name"
              type="text"
              setValue={setFirstName}
              value={firstName}
              placeholder="Jean Dupont"
              alert={alertFirstName === true ? "Please fill a firstname" : null}
            />
            <CustomInput
              idName="Email"
              type="email"
              setValue={setEmail}
              value={email}
              placeholder="jean.dupont@lereacteur.io"
              alert={alertEmail === true ? "Please fill an email" : null}
            />
            <CustomInput
              idName="Password"
              type="password"
              setValue={setPassword}
              value={password}
              placeholder="PaSsWoRd"
              alert={
                alertPassword === true
                  ? "Please fill a password"
                  : alertSecondPassword === true
                  ? true
                  : null
              }
            />
            <CustomInput
              idName="Confirm your password"
              type="password"
              setValue={setSecondPassword}
              value={secondPassword}
              placeholder="PaSsWoRd"
              alert={
                alertPassword === true
                  ? "Please fill a password"
                  : alertSecondPassword === true
                  ? "Please fill the same password as above"
                  : null
              }
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;

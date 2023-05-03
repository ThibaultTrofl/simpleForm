const StepTwo = ({ secondStep, setSecondStep, name, email, password }) => {
  const handleClickChange = (event) => {
    event.preventDefault();
    setSecondStep(!secondStep);
  };

  return (
    <section className="container">
      <div className="recap-box">
        <div className="recap-text">
          <h1>Results</h1>
          <p>
            <span>Name : </span>
            {name}
          </p>
          <p>
            <span>Email : </span>
            {email}
          </p>
          <p>
            <span>Password : </span>
            {password}
          </p>
        </div>
        <button onClick={handleClickChange}>Edit your information</button>
      </div>
    </section>
  );
};
export default StepTwo;

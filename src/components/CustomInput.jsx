const CustomInput = ({ idName, type, value, setValue, placeholder, alert }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div className="custom-input">
      <label htmlFor={idName}>{idName}</label>
      <input
        id={idName}
        type={type}
        name={idName}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={alert ? "bcg-red" : null}
      />
      <p className="text-alert">{alert === true ? null : alert}</p>
    </div>
  );
};
export default CustomInput;

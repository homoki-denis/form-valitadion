import "./App.scss";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const firstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const emailHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const submittedHandler = (e) => {
    e.preventDefault();
    if (submitted && values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <form className="form-container" onSubmit={submittedHandler}>
      {submitted && valid ? (
        <div className="submit-form">
          <p>Success! Thank You For Registering!</p>
        </div>
      ) : null}
      <div className="form-header">
        <input
          className="firstName"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={firstNameHandler}
        />
        {submitted && !values.firstName ? (
          <span>Please Enter A First Name</span>
        ) : null}
        <input
          className="lastName"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={lastNameHandler}
        />
        {submitted && !values.lastName ? (
          <span>Please Enter A Last Name</span>
        ) : null}
        <input
          className="email"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={emailHandler}
        />
        {submitted && !values.email ? <span>Please Enter A Email</span> : null}
      </div>

      <div className="form-button">
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default App;

import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      setErrorMsg("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
    } else {
      const userData = {
        email: email,
        password: password,
      };
      setSubmit([...submit, userData]);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMsg("");
    }
  };

  const handleDelete = (index) => {
    const updatedData = submit.filter((_, i) => i !== index);
    setSubmit(updatedData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {errorMsg && <p className="err">{errorMsg}</p>}

      {submit.length > 0 && (
        <div>
          <h3>Submitted Data:</h3>
          {submit.map((data, index) => (
            <div key={index}>
              <p>Email: {data.email}</p>
              <p>Password: {data.password}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;

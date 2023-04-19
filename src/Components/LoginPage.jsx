import { Link } from "react-router-dom";
import { useState } from "react";

function UsernameForm() {
  // uncontrolled form inputs to controlled form inputs
  const [username, setUsername] = useState(null);

  function handleChange(e) {
    setUsername(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Your username is : ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uInput">Username:</label>
        <input
          type="text"
          id="uInput"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function LoginPage() {
  return (
    <>
      <Link to="/">Home</Link>
      <UsernameForm />
    </>
  );
}

export default LoginPage;

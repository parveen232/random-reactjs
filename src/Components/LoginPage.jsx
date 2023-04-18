import { Link } from "react-router-dom";

function UsernameForm() {

  function handleChange(e) {
    const value = e.target.value;
    const isLowerCase = value === value.toLowerCase();
    const btn = e.target.parentNode.parentNode.querySelector("button");
    if (isLowerCase) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Your username is : ${e.target.elements.uInput.value}`);
  }

  return (
    <>
      <p>Username must be lowercase</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uInput">Username:</label>
          <input type="text" id="uInput" onChange={handleChange} />
        </div>
        <button type="submit" id="md">Submit</button>
      </form>
    </>
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

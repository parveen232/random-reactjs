import { Link, useNavigate } from "react-router-dom";

export default function LoginPage({ username, setUsername, setUserLogged }) {
  let navigate = useNavigate();

  function handleChange(e) {
    setUsername(e.target.value.toLowerCase().trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserLogged(true);
    navigate(`/${username}`);
  }

  return (
    <>
      <Link to="/">Home</Link>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";

export default function UserPage({ username, setUsername, setUserLogged }) {
  let navigate = useNavigate();
  function logout() {
    setUserLogged(false);
    setUsername("");
    navigate(`/login`);
  }

  return (
    <>
      <Link to="/">Home</Link>
      <div>Username is: {username}</div>
      <button onClick={logout}>LogOut</button>
    </>
  );
}

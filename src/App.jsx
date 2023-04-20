import { Link, Routes, Route } from "react-router-dom";
import Carousel from "./Components/Carousel";
import CurrentDate from "./Components/CurrentDate";
import FilterList from "./Components/FilterList";
import Quiz from "./Components/Quiz";
import Gallery from "./Components/Gallery/Gallery";
import List from "./Components/List";
import Tech from "./Components/Tech";
import TaskApp from "./Components/TaskApp/TaskApp";
import LoginPage from "./Components/LoginPage";
import { useState, useEffect } from "react";
import UserPage from "./Components/UserPage";

export default function App() {
  const type = ["nature", "space", "history", "architecture", "furniture"];

  const [userLogged, setUserLogged] = useState(
    JSON.parse(window.localStorage.getItem("userLogged")) ?? JSON.parse(false)
  );

  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );

  useEffect(() => {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("userLogged", JSON.stringify(userLogged));
  });

  function Home() {
    return (
      <>
        <header>
          <div className="h-container">
            <span className="logo">Random ReactJS</span>
            {JSON.parse(userLogged) ? (
              <Link to={username}>{username}</Link>
            ) : (
              <Link to="login">login</Link>
            )}
          </div>
        </header>
        <main>
          <CurrentDate />
          <Carousel />
          <Gallery size={7} type={type} />
          <Quiz />
          <Tech />
          <TaskApp />
          <FilterList />
          <List type={type} />
        </main>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={username}
          element={
            <UserPage
              username={username}
              setUsername={setUsername}
              setUserLogged={setUserLogged}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              username={username}
              setUsername={setUsername}
              setUserLogged={setUserLogged}
            />
          }
        />
      </Routes>
    </>
  );
}

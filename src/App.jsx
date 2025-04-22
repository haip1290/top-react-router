import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>Hello from the main page</h1>
      <p>Here are some examples of links to other pages </p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;

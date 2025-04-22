import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Oh no! This route does not exist</h1>
      <Link to={"/"}>You can go back to home page from here though</Link>
    </>
  );
};

export default ErrorPage;

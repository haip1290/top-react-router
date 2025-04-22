import App from "../App.jsx";
import Profile from "../component/Profile.jsx";
import ErrorPage from "../component/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;

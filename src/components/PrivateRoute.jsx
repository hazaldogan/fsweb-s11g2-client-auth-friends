import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuth();
  console.log("privateRoute", auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

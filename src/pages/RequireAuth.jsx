import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  let user = useSelector((state) => state.user.currentUser);
  if (user) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

export default RequireAuth
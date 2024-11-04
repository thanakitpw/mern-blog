import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
   const { currentUser } = useSelector((state) => state.user);
   return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;

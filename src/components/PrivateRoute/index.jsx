import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { isAuth } = useSelector(state => state.auth);

    if(!isAuth){
        return <Navigate to='/login' state={{from: location}} />
    }

    return children;
}
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


// eslint-disable-next-line no-unused-vars
const PrivateRoutes = ({children}) => {

    const location = useLocation();

    // firebase-hook
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate state={location.pathname} to={"/login"} />
    }
    return children;
};

export default PrivateRoutes;
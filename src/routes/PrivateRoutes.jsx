import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";


// eslint-disable-next-line no-unused-vars
const PrivateRoutes = ({children}) => {

    // firebase-hook
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to={"/login"} />
    }
    return children;
};

export default PrivateRoutes;
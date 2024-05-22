import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const PrivateRoutes = ({children}) => {

    // firebase-hook
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <div className="flex justify-center items-center h-[calc(100vh-88px)]">
            <h2 className="text-7xl font-bold">L</h2>
            <div className="w-12 h-12 border-8 border-dashed border-error rounded-full animate-spin mt-5"></div>
            <h2 className="text-7xl font-bold">ading...</h2>
        </div>
    }
    if(!user){
        return <Navigate to={"/login"} />
    }
    return children;
};

export default PrivateRoutes;
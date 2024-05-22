import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";


const GoogleGithubLogin = () => {

    // firebase-hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    console.log(user, loading, error)

    return (
        <div>
            <div className="divider divider-error text-white">or</div>
        <p className="text-white text-center">Login with</p>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-error w-full mt-5 mb-2">Google</button>
        <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral w-full">Github</button>
        </div>
    );
};

export default GoogleGithubLogin;
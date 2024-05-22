import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";


const GoogleGithubLogin = () => {

    // firebase-hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);


    console.log( user, loading, error,  userGit, loadingGit, errorGit)
    return (
        <div>
            <p className="text-error">{error?.message}</p>
            <p className="text-error">{errorGit?.message}</p>
            <div className="divider divider-error text-white">or</div>
        <p className="text-white text-center">Login with</p>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-error w-full mt-5 mb-2">Google</button>
        <button onClick={() => signInWithGithub()} className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral w-full">Github</button>
        </div>
    );
};

export default GoogleGithubLogin;
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";


const GoogleGithubLogin = () => {

    // firebase-hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(data => {
            console.log(data)
            toast.success(`Welcome ${data.user.displayName}`, {
                duration: 4000,
                position: 'top-right',})
            if(data?.user?.email){
                const userInfo ={
                    name: data?.user?.displayName,
                    email: data?.user?.email,
                }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(userInfo)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    
                });
            }
        })
    };

    const handleGithubLogin = () => {
        signInWithGithub()
        .then(data => {
            console.log(data)
            toast.success(`Welcome ${data.user.displayName}`, {
                duration: 4000,
                position: 'top-right',})
                if(data?.user?.uid){
                    const userInfo ={
                        name: data?.user?.displayName,
                        email: data?.user?.email,
                    }
                    fetch('http://localhost:5000/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify(userInfo)
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        
                    });
                }
        })
    }

    console.log( user, loading, error,  userGit, loadingGit, errorGit)
    return (
        <div>
            <p className="text-error">{error?.message}</p>
            <p className="text-error">{errorGit?.message}</p>
            <div className="divider divider-error text-white">or</div>
        <p className="text-white text-center">Login with</p>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-error w-full mt-5 mb-2">Google</button>
        <button onClick={handleGithubLogin} className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral w-full">Github</button>
        </div>
    );
};

export default GoogleGithubLogin;
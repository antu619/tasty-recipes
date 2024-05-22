import { Link, useNavigate } from "react-router-dom";
import GoogleGithubLogin from "../components/GoogleGithubLogin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";


const Login = () => {

    const navigate = useNavigate()

    // firebase-hook
    const [user] = useAuthState(auth);

    useEffect( () => {
        if(user){
            navigate('/')
        }
    }, [navigate, user])

    return (
        <div className="h-[720px] flex justify-center pt-20" style={{backgroundImage: 'url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)'}}>
            <div>
            <form className="w-80">
                <h3 className="text-3xl font-semibold text-center text-white mb-10">Login</h3>
        <div className="form-control mb-2">
          <input type="email" placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" className="input input-bordered w-full" required />
          <a href="#" className="label-text-alt link link-hover text-white mt-1">Forgot password?</a>
        </div>
        <div className="form-control mt-6">
          <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral">Login</button>
        </div>
        <p className="text-white mt-1">Want to <Link className="text-error" to='/register'>register?</Link></p>
      </form>
      {/* Login With Google and Github */}
      <GoogleGithubLogin/>
            </div>
        </div>
    );
};

export default Login;
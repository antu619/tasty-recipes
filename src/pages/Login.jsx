import { Link } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../firebase/firebase.config";


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user, loading, error)
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
        <div className="divider divider-error text-white">or</div>
        <p className="text-white text-center">Login with</p>
      </form>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-error w-full mt-5 mb-2">Google</button>
        <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral w-full">Github</button>
            </div>
        </div>
    );
};

export default Login;
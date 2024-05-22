import { Link, useNavigate } from "react-router-dom";
import GoogleGithubLogin from "../components/GoogleGithubLogin";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  // firebase-hook
  const [userInfo] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  console.log(user, loading, error);

  const handlelogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div
      className="h-[720px] flex justify-center pt-20"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)",
      }}
    >
      <div>
        <form onSubmit={handlelogin} className="w-80">
          <h3 className="text-3xl font-semibold text-center text-white mb-10">
            Login
          </h3>
          <div className="form-control mb-2">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
            <a
              href="#"
              className="label-text-alt link link-hover text-white mt-1"
            >
              Forgot password?
            </a>
          </div>
          <div className="form-control mt-6">
            {error && <p className="text-error mb-2">{error?.message}</p>}
            <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral">
              Login
            </button>
          </div>
          <p className="text-white mt-1">
            Want to{" "}
            <Link className="text-error" to="/register">
              register?
            </Link>
          </p>
        </form>
        {/* Login With Google and Github */}
        <GoogleGithubLogin />
      </div>
    </div>
  );
};

export default Login;

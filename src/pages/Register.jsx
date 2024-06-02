import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleGithubLogin from "../components/GoogleGithubLogin";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || "/";


  // firebase-hook
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user2, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data)
      if(data?.user?.email){
          const userInfo ={
              name: name,
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
            toast.success(`Welcome ${name}`, {
              duration: 4000,
              position: 'top-right',})
          });
      }
  })
  };

console.log(user, loading, error, user2)


useEffect(() => {
  if(user){
    navigate(from, {replace: true});
  }
}, [from, navigate, user])


  return (
    <div
      className="h-[720px] flex justify-center pt-20"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)",
      }}
    >
      <div>
        <form onSubmit={handleRegister} className="w-80">
          <h3 className="text-3xl font-semibold text-center text-white mb-10">
            Register
          </h3>
          <div className="form-control mb-2">
            <input
              type="text"
              name="name"
              placeholder="full name"
              className="input input-bordered w-full"
              required
            />
          </div>
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
            {
                error &&
                <p className="text-error mb-2">{error?.message}</p>
            }
            <button
             
              className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral"
            >
              Register
            </button>
          </div>
          <p className="text-white text-center mt-4">
            Already have an account?
            <Link className="text-error" to="/login">
              login?
            </Link>
          </p>
        </form>
        {/* Google Github Login */}
        <GoogleGithubLogin />
      </div>
    </div>
  );
};

export default Register;

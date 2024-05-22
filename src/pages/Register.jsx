import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="h-[720px] flex justify-center pt-20" style={{backgroundImage: 'url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)'}}>
            <div>
            <form className="w-80">
                <h3 className="text-3xl font-semibold text-center text-white mb-10">Register</h3>
        <div className="form-control mb-2">
          <input type="text" placeholder="full name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control mb-2">
          <input type="email" placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" className="input input-bordered w-full" required />
          <a href="#" className="label-text-alt link link-hover text-white mt-1">Forgot password?</a>
        </div>
        <div className="form-control mt-6">
          <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral">Register</button>
        </div>
        <p className="text-white text-center mt-4">Already have an account? <Link className="text-error" to='/login'>login?</Link></p>
      </form>
            </div>
        </div>
    );
};

export default Register;
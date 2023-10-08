// import { useContext } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const  {signIn}= useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email,password);
    e.target.reset();
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: "url('/Bg.png')"}}  data-aos="zoom-in">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
        </div>
        <div className="w-full px-10 md:p-12 py-32  md:w-2/3 xl:w-1/3 rounded-3xl shadow-2xl mt-20 bg-base-100">
          <form onSubmit={handleLogin}  >
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                name="email"
                required
              />
            </div>
            <div> 
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full" 
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex items-center justify-between mt-5">
            <p>Do not have any account? </p>
            <NavLink to={'/register'}><p className=" text-blue-900 text-2xl font-bold label-text-alt link link-hover">
                  Register
                </p></NavLink>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;

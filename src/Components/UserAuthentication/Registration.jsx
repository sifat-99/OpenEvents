import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const [valid, setValid] = useState("");

  const { createUser, logOut } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.text.value;
    const image = e.target.image.value;
    if (password.length < 6) {
      setValid("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setValid("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setValid("Password must contain at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setValid("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setValid("Password must contain at least one special character");
      return;
    } else {
      setValid("");
    }

    swal({
      title: "Good job!",
      text: "Registration successful!",
      icon: "success",
      button: " Login Now!!!",
    }).then(function () {
      window.location = "/login";
      // for force the new registered user to login again after registration to access everything.
      logOut();
    });
    createUser(email, password, name, image)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(email, password, image, name);
    e.target.reset();
  };

  return (
    <div
      className=" min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/Bg.png')" }}
      data-aos="zoom-in-left"
    >
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-center">Register now!!!</h1>
      </div>
      <div className=" w-full px-10 md:p-12 py-32  md:w-2/3 xl:w-1/3 rounded-3xl shadow-2xl mt-20 bg-base-100">
        <form onSubmit={handleLogin}>
          <div>
            <label className="label">
              <span className="label-text">Your Name: </span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              name="text"
              required
            />
          </div>
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
              name="image"
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

            <p className="text-red-600 font-semibold mt-3">{valid}</p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-xl font-bold">Already have an account?</p>
            <NavLink to={"/login"}>
              <p className=" text-blue-600 text-2xl font-bold label-text-alt link link-hover">
                Login
              </p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

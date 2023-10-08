import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const Profile = () => {
  const user = useContext(AuthContext);

  console.log(user.user);

  return (
    <div className="grid justify-center items-center mt-32">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img className="w-full h-full" src={user?.user?.photoURL} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {user?.user?.displayName}
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            {user?.user?.email}
          </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-black antialiased"
          >
           <FaFacebook></FaFacebook>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-black antialiased"
          >
            <FaTwitter></FaTwitter>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-black antialiased"
          >
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

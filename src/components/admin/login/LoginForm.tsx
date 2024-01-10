import Image from "next/image";
import { FiLock, FiMail } from "react-icons/fi";

const logoIn = () => {
  //   localStorage.setItem("uI", true);
  //   window.location = "/";
};

const LoginForm = () => {
  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
      <div className="flex items-center justify-center">
        <Image
          src={`/assets/logo/drug-logo.png`}
          width={170}
          height={61}
          alt="Logo"
          className="h-auto"
          priority
        />
      </div>

      <div className="text-center my-5">
        <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
        <p>Enter your information to Login</p>
      </div>

      <div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Email</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FiMail fontSize={24} />
              </div>
              <input
                type="email"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                placeholder="mahfuzislam@atilimited.net"
              />
            </div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label className="text-xs font-semibold px-1">Password</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FiLock fontSize={24} />
              </div>

              <input
                type="password"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                placeholder="************"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              className="block w-full max-w-xs mx-auto bg-primary hover:bg-[#DF343A] focus:bg-[#6D0E16] text-white rounded-lg px-3 py-3 font-semibold"
              onClick={logoIn}
            >
              LOGIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

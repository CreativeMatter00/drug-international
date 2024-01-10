"use client";

import LoginForm from "@/components/admin/login/LoginForm";
import LoginHero from "@/components/admin/login/LoginHero";

const page = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <LoginHero />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

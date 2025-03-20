import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginData = {
      email,
      password,
    };

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert("Login successful!!");
        localStorage.setItem("token", data.token); // Store token in localStorage
        navigate("/admin/dashboard", { replace: true }); // Navigate to dashboard
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    required
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-neutral-500 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.98a10.022 10.022 0 011.362-1.51 10.022 10.022 0 011.555-1.222m5.97 1.75a2.992 2.992 0 014.26 4.26M9.178 7.178A10.02 10.02 0 0112 5c4.418 0 8.154 2.883 9.35 7a9.967 9.967 0 01-1.64 3.014m-2.286 1.907a10.019 10.019 0 01-3.414 1.979m0 0L3 3m5.97 1.75a10.022 10.022 0 011.362-1.51M3.98 8.98A10.022 10.022 0 0112 5c4.418 0 8.154 2.883 9.35 7a9.967 9.967 0 01-1.64 3.014m-2.286 1.907a10.019 10.019 0 01-3.414 1.979m0 0L3 3"
                      />
                    )}
                  </svg>
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <p>
                  If you haven't an account, please{" "}
                  <Link to="/sign-up" className="text-blue-700 underline gap-1">
                    Sign up{" "}
                  </Link>
                  here.
                </p>
                <div className="relative">
                  <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-6 py-2">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useTranslations, useLocale } from "next-intl";

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations("RegisterForm");
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Created successfully!");
        console.log(`${data.token}`);
        setLoading(false);
        router.push(`/${locale}/sign-in`);
      } else {
        setLoading(false);
        setErrorMessage(true);
        console.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("An error occurred:", error);
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t("create_account")} 🥳
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="text">
            {t("username")}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-300 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-300 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="password"
          >
            {t("password")}
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full pr-10 focus:border-blue-300 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                {t("submitting")}..
              </div>
            ) : (
              t("submit_button")
            )}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <span className="inline-block align-baseline text-sm">
          {t("have_account")}{" "}
          <a
            className="text-blue-500 hover:text-blue-800"
            href={`/${locale}/sign-in`}
          >
            {t("sign_in")}
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;

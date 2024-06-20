"use client";
import SignInForm from "@/app/components/forms/SignInForm";

const SignInPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-login">
      <div className="relative z-10 w-lg max-w-[38rem] p-8">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;

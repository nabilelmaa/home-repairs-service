"use client";
import SignInForm from "@/app/components/forms/SignInForm";
import Meteors from "../../components/magicui/meteors";

const SignInPage = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      {/* <Meteors number={30} /> */}
      {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"> */}
      <SignInForm />
      {/* </p> */}
    </div>
  );
};

export default SignInPage;

// export function MeteorDemo() {
//   return (
//     <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
//       <Meteors number={30} />
//       {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"> */}
//         <SignInForm />
//       {/* </p> */}
//     </div>
//   );
// }

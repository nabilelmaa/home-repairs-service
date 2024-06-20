// // hooks/useAuth.js
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from "@/utils/auth";

// export const useAuthRedirect = () => {
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       router.push("/login");
//     }
//   }, [router]);
// };

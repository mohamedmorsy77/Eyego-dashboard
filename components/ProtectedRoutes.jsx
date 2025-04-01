"use client";

import { usePathname, useRouter } from "next/navigation";

import { useEffect } from "react";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }) {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!token && pathName !== "/sign-in") {
      router.replace("/sign-in");
    }
  }, [token, pathName, router]);

  return token ? children : null;
}

export default ProtectedRoutes;

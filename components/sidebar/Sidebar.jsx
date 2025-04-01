"use client";
import { logOut } from "@/redux/slices/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/sign-in");
  };
  return (
    <div className="sidebar  bg-white shadow-2xl w-[14%] fixed top-0 left-0 h-[100vh] transition-all">
      <h3 className="text-center p-2 lg:p-5 font-bold text-sm md:text-lg m-auto relative">
        Eyego
      </h3>
      <ul className="list-none mt-7">
        <li
          className={`mt-4 p-2 text-center  ${
            pathName === "/dashboard"
              ? "bg-gray-700 text-white"
              : " hover:bg-gray-300"
          } `}
        >
          <Link
            href="/dashboard"
            className="lg:flex lg:gap-2 items-center text-lg p-2 rounded"
          >
            <i className="ri-dashboard-line"></i>
            <span className="hidden lg:inline">Dashboard</span>
          </Link>
        </li>
        <li
          className={`mt-4 p-2 text-center  ${
            pathName.startsWith("/dashboard/charts")
              ? "bg-gray-700 text-white"
              : " hover:bg-gray-300"
          } `}
        >
          <Link
            href="/dashboard/charts"
            className="lg:flex lg:gap-2  items-center text-lg p-2"
          >
            <i className="ri-bar-chart-2-line"></i>
            <span className="hidden lg:inline">Charts</span>
          </Link>
        </li>
      </ul>
      <button className="bg-gray-700 flex justify-center items-center text-white cursor-pointer px-5 py-2 rounded absolute bottom-5 left-1/2 -translate-x-1/2">
        <i className="ri-logout-box-line"></i>
        <span className="hidden lg:inline" onClick={handleLogOut}>
          LogOut
        </span>
      </button>
    </div>
  );
}

export default Sidebar;

import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart";
import { setAuthState } from "../../slices/authSlice";
import { setSelectedUser } from "../../slices/selectedUserSlice";
import { useRouter } from "next/router";

function Navbar() {
  const { authState, authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setAuthState(false));
    router.push("/login");
  };
  const handleProfile = () => {
    dispatch(setSelectedUser(authUser));
    router.push("/dashboard/user");
  };

  return (
    <header className="w-screen fixed flex items-center h-20 px-6 sm:px-10 bg-white">
      <div className="p-2 ml-6 mr-2 flex items-center flex-shrink-0 ">
        <img
          className="w-12 h-12 rounded-full cursor-pointer "
          src="/images/logoLibrary.png"
          alt="logo"
        />
        <div className=" p-2 ml-2 text-xl font-medium hidden md:block">
          Library Management System
        </div>
      </div>

      {authState ? (
        <div className="flex flex-shrink-0 items-center ml-auto">
          <button
            onClick={() => handleProfile()}
            className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
          >
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold">
                {authUser.userInfo?.firstName}
              </span>
              <span className="text-sm text-gray-600">Lecturer</span>
            </div>

            <img
              src={
                authUser.userInfo?.img
                  ? "user.userInfo.img"
                  : "/images/avatar.png"
              }
              alt="user profile photo"
              className="h-12 w-12 ml-2 sm:ml-3 mr-2 rounded-full object-cover"
            />
          </button>
          <div className="border-l pl-3 ml-3 space-x-1 flex items-center">
            <span className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <Cart />
            </span>
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <button
              onClick={() => handleLogout()}
              className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            >
              <span className="sr-only">Log out</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex ml-auto gap-5 font-medium">
          <span>About</span>
          <button onClick={() => router.push("/features")}>Features</button>
          <button onClick={() => router.push("/login")}>Sign in</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;

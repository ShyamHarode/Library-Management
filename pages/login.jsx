import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser, setAuthState } from "../slices/authSlice";
import { setSelectedUser } from "../slices/selectedUserSlice";
import { useRouter } from "next/router";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

function login() {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState({
    email: "",
    password: "",
    type: "",
  });

  const router = useRouter();

  const userAuth = (e) => {
    e.preventDefault();

    let flag = userList.some((user) => {
      if (
        user.userInfo.email == currUser.email &&
        user.userInfo.password == currUser.password &&
        user.userInfo.type == currUser.type
      ) {
        dispatch(setLoggedUser(user));
        dispatch(setAuthState(true));
        dispatch(setSelectedUser(user));
        return true;
      } else return false;
    });
    if (flag) {
      router.push("/dashboard");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div
      className="flex items-center h-screen justify-center bg-cover"
      style={{ backgroundImage: "url(images/library-bg.jpg" }}
    >
      <div className="flex flex-col items-center p-3 bg-white rounded-lg">
        <div>
          <h3 className="text-4xl text-center font-bold ">Login</h3>
          <div className="mt-3">
            <label
              className="pointer mx-2 "
              style={
                currUser.type === "ADMIN"
                  ? { fontWeight: "bold", color: "burlywood" }
                  : { color: "black" }
              }
            >
              <input
                type="radio"
                className="m-1"
                name="type"
                onChange={() => setCurrUser({ ...currUser, type: "ADMIN" })}
              />
              Admin
            </label>
            <label
              className="pointer mx-2"
              style={
                currUser.type === "USER"
                  ? { fontWeight: "bold", color: "burlywood" }
                  : { color: "black" }
              }
            >
              <input
                className="m-1"
                type="radio"
                name="type"
                onChange={() => setCurrUser({ ...currUser, type: "USER" })}
              />
              User
            </label>
          </div>
        </div>
        {/* {error && <div style={{ color: "red" }}>Invalid details</div>} */}
        <div className=" px-6 py-4 mt-3 overflow-hidden  sm:max-w-lg sm:rounded-lg">
          <form>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Email:
              </label>

              <input
                // type="email"
                name="email"
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) =>
                  setCurrUser({ ...currUser, email: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Password:
              </label>

              <input
                type="password"
                name="password"
                // minLength="6"
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) =>
                  setCurrUser({ ...currUser, password: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="w-50 px-3 py-2 tracking-wide text-white bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={(e) => userAuth(e)}
              >
                Login
              </button>
            </div>
          </form>
          <div
            style={{ color: "blue" }}
            className="flex justify-center items-center mt-4 cursor-pointer "
            onClick={() => router.push("/newUser")}
          >
            Create New Account
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

login.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer width={true} />
    </>
  );
};

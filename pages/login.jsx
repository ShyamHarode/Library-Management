import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/userSlice";
import Router from "next/router";

function login() {
  const [currUser, setCurrUser] = useState();
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  const userAuth = (e) => {
    e.preventDefault();

    let flag = userList.some((user) => {
      if (user.email == currUser.email && user.password == currUser.password) {
        dispatch(setCurrentUser(user));
        return true;
      } else return false;
    });
    if (flag) {
      Router.push("/dashboard");
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
          <h3 className="text-4xl font-bold ">Login</h3>
        </div>
        {/* {error && <div style={{ color: "red" }}>Invalid details</div>} */}
        <div className=" px-6 py-4 mt-6 overflow-hidden  sm:max-w-lg sm:rounded-lg">
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
                className="w-50 px-3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={(e) => userAuth(e)}
              >
                Login
              </button>
            </div>
          </form>
          <div
            style={{ color: "blue" }}
            className="flex justify-center items-center mt-4 cursor-pointer "
            onClick={() => Router.push("/newUser")}
          >
            Create New Account
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

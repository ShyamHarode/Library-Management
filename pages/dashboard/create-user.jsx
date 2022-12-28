import React, { useState } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/userListSlice";
import { updateInfo } from "../../slices/userSlice";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
function newUser() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setUser({ ...user, [key]: val });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      user.username == "" ||
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.password == ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    dispatch(updateInfo(user));
    dispatch(addUser(user));

    setUser(initialState);
    console.log("user");
    Router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 sm:pl-72 bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">User Registration</h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="id">
                Username
              </label>
              <input
                required
                name="username"
                type="text"
                value={user.username}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="Name">
                First Name
              </label>
              <input
                required
                name="firstName"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={user.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="Name">
                Last Name
              </label>
              <input
                required
                name="lastName"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={user.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="Name">
                Password
              </label>
              <input
                required
                name="password"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={(e) => handleAdd(e)}
              >
                Create New User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default newUser;

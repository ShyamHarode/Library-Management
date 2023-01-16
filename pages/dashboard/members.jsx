import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../slices/userListSlice";
import Router from "next/router";
import { setSelectedUser } from "../../slices/selectedUserSlice";

function members() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);

  const handleIssue = (user) => {
    dispatch(setSelectedUser(user));
    Router.push(`/dashboard/${user.userInfo.username}/issue-book`);
  };
  const handleProfile = (user) => {
    dispatch(setSelectedUser(user));
    Router.push(`/dashboard/${user.userInfo.username}`);
  };

  return (
    <div className="w-full flex  justify-around flex-wrap pt-20 sm:pl-72 bg-gray-100 gap-5">
      <div className="overflow-x-auto p-4 mx-4 mt-4 bg-white shadow-lg rounded-lg w-full">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Profile
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Books
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((user, idx) => {
                  return (
                    <tr
                      key={idx}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          className="w-10 h-10 rounded-full cursor-pointer"
                          src="/images/No_Image_Available.jpg"
                          onClick={() => handleProfile(user)}
                          alt="No image"
                        />
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {user.userInfo.firstName}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {user.status}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {user.books.length}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {user.payment}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        <button
                          className="bg-purple-400 rounded-lg p-2 mx-2 h-10 text-center"
                          onClick={() => handleIssue(user)}
                        >
                          Issue Book
                        </button>
                        <button
                          onClick={() => dispatch(deleteUser(idx))}
                          className="bg-orange-400 rounded-lg p-2 mx-2 h-10 text-center"
                        >
                          Delete User
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default members;

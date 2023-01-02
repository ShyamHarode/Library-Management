import React from "react";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);

  return (
    <div className="w-full flex items-center justify-around flex-wrap min-h-screen pt-20 sm:pl-72 bg-gray-100 gap-5">
      <div className=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg w-full">
        <table>
          <thead>
            <th>No.</th>
            <th>User</th>
            <th>Status</th>
            <th>Books</th>
            <th>Due</th>
            <th>Action</th>
          </thead>
          <tbody>
            {list.map((user, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{user.userInfo.name}</td>
                  <td>{user.status}</td>
                  <td>{user.books.length}</td>
                  <td>{user.payment}</td>
                  <td>
                    <button className="bg-purple-400 rounded-lg p-2 h-10 text-center">
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
  );
}

export default UserList;

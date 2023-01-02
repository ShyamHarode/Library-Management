import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Link from "next/link";

function Aside() {
  const user = useSelector((state) => state.user);
  const [sidebar, setSidebar] = useState(true);

  return (
    <aside className="flex w-32 mt-20 fixed sm:w-56 h-screen z-10">
      <div className="flex-grow flex flex-col  text-gray-300 bg-gray-800">
        <div className="text-right p-2 sm:hidden">
          <span onClick={(e) => setSidebar(false)}>XX</span>
        </div>
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-6 w-6 text-grey-darker fill-current xl:mr-2"
            >
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"></path>
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/newBook"
            className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg"
          >
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="">Add New Book</span>
          </Link>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg"
          >
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
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="">Messages</span>
          </a>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg"
          >
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
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="">Documents</span>
          </Link>
          <Link
            href="/dashboard/users"
            className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-6 w-6 text-grey-darker fill-current xl:mr-2"
            >
              <path
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                className="heroicon-ui"
              ></path>
            </svg>
            <div className="">Users</div>
          </Link>
          <button className="inline-flex items-center justify-start gap-2 px-2 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-700 focus:bg-white rounded-lg">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="">Settings</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Aside;

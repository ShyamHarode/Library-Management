import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookList from "../../components/BookList";
import { setSelectedUser } from "../../slices/selectedUserSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import Chart from "../../components/Chart";

function dashboard() {
  const userList = useSelector((state) => state.userList);
  const books = useSelector((state) => state.books);
  const { authState, authUser } = useSelector((state) => state.auth);

  const [activeUser, setActiveUser] = useState(0);
  const [bookStock, setBookStock] = useState(0);
  const [bookList, setBookList] = useState(books);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleProfile = (user) => {
    dispatch(setSelectedUser(user));
  };

  const handleSearch = (e) => {
    let val = e.target.value.toUpperCase();
    const list = books.filter((book) => book.name.toUpperCase().includes(val));
    setBookList(list);
  };

  const handleData = () => {
    let active = 0;
    let stock = 0;
    userList.forEach((user) => {
      if (user.status == "ACTIVE") {
        active++;
      }
    });
    books.forEach((book) => {
      stock += +book.qty;
    });
    setActiveUser(active);
    setBookStock(stock);
  };
  useEffect(() => {
    handleData();
  }, [userList, books]);
  useEffect(() => {
    if (!authState) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <main className="p-6  sm:p-10 sm:pl-72 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Manage dashboard
            </button>
            <Link
              href="/dashboard/create-user"
              className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create new user
            </Link>
          </div>
        </div>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">
                {userList.length}
              </span>
              <span className="block text-gray-500">Users</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{activeUser}</span>
              <span className="block text-gray-500">Active</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-800 bg-yellow-100 rounded-full mr-6">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">
                {books.length}
              </span>

              <span className="block text-gray-500">Books</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
                  fill="#6e076b"
                ></path>
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{bookStock}</span>
              <span className="block text-gray-500">Stock</span>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap gap-6">
          <div className="w-80 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Members</span>
              <button
                type="button"
                className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Books
                <svg
                  className="-mr-1 ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-96">
              <ul className="p-6 space-y-6">
                {userList.map((u) => {
                  return (
                    <li
                      key={u.id}
                      className="pr-2 flex items-center hover:bg-gray-200"
                    >
                      <Link
                        href={`/dashboard/${u.userInfo.username}`}
                        className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden"
                      >
                        <img
                          src={`https://randomuser.me/api/portraits/men/${
                            Math.floor(Math.random() * 50) + 1
                          }.jpg`}
                          alt="profile picture"
                          onClick={() => handleProfile(u)}
                        />
                      </Link>
                      <span className="text-gray-600">
                        {u.userInfo.firstName} {u.userInfo.lastName}
                      </span>
                      <span className="ml-auto font-semibold">
                        {u.books.length}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col row-span-3 w-96 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">
              Students by type of studying
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                <Chart />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div className="flex justify-between items-center">
              <div className="px-6 py-3 font-semibold">Available Books</div>
              <input
                type="search"
                className=" text-black px-4 py-2 m-3
             border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Search Book"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <BookList books={bookList} dashboard={true} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default dashboard;

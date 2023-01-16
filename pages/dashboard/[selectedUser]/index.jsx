import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function member() {
  const currentUser = useSelector((state) => state.selectedUser);

  const [bookList, setBookList] = useState(currentUser.books);
  const router = useRouter();

  const handleSearch = (e) => {
    let val = e.target.value.toUpperCase();
    const list = currentUser.books.filter((book) =>
      book.name.toUpperCase().includes(val)
    );
    setBookList(list);
  };

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      router.push("/login");
    }
  }, [currentUser]);

  return (
    <div className="w-full flex items-center flex-wrap  pt-24 sm:pl-72 bg-gray-100">
      <div className="px-4 py-5 mx-2 text-left bg-white shadow-lg rounded-lg">
        <div className="flex flex-wrap ">
          <div className="w-48 p-3 flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full bg-red-400"
              src={currentUser.userInfo?.img}
              alt=""
            />
            <h3 className="p-2 text-2xl font-bold text-center">
              {currentUser.userInfo?.firstName}
            </h3>
          </div>
          <div className="p-2 text-left">
            <div className="p-2">
              Username: <strong>{currentUser.userInfo?.username}</strong>
            </div>
            <div className="p-2">
              User Id: <strong>{currentUser.id}</strong>
            </div>
            <div className="p-2">
              Email: <strong>{currentUser.userInfo?.email}</strong>
            </div>
            <div className="p-2">
              Password: <strong>{currentUser.userInfo?.password}</strong>
            </div>
            <div className="p-2">
              Status: <strong>{currentUser.status}</strong>
            </div>
          </div>
        </div>
        <div className=" mt-2 bg-blue-600 rounded-lg text-center">
          <button className="p-2">Update Details</button>
        </div>
      </div>
      <div className="m-4 shadow-lg hidden md:block ">
        <img
          className=" w-80 h-72 rounded-lg"
          src="/images/reading-books.png"
          alt="books"
        />
      </div>

      {currentUser.books?.length > 0 ? (
        <div className=" p-4 m-4 text-left bg-white shadow-lg rounded-lg">
          <div className="w-full flex justify-between">
            <div>
              <label className="block m-1" htmlFor="search">
                Search Book
              </label>
              <input
                type="search"
                className=" text-black px-4 py-2 m-1
             border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
          <ol className="flex flex-wrap max-h-96 overflow-y-scroll">
            {bookList.map((book, idx) => {
              return (
                <div
                  className="m-2 bg-white shadow-md rounded-lg max-w-sm focus:ring-4 focus:ring-orange-900 dark:bg-gray-800 dark:border-gray-700 w-40"
                  key={idx + book.name}
                >
                  <img
                    className="rounded-t-lg p-4 w-36 mx-auto"
                    src={book.img ? book.img : "/images/No_Image_Available.jpg"}
                    alt="book image"
                  />

                  <div className="px-5 pb-5">
                    <a href="#">
                      <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                        {book.name}
                      </h3>
                    </a>
                  </div>
                </div>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className=" p-4 m-4 text-left bg-white shadow-lg rounded-lg">
          You haven't issue any book
        </div>
      )}
    </div>
  );
}

export default member;

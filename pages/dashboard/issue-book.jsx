import React, { useState } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../slices/userListSlice";
// import { updateBooks } from "../slices/userSlice";
import BookList from "../../components/BookList";
import books from "../../public/data/books.json";

function user() {
  const [bookList, setbookList] = useState(books);
  const [search, setSearch] = useState();
  const [selectedBook, setSelectedBook] = useState();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.selectedUser);

  const handleChange = (e) => {
    // let key = e.target.name;
    // let val = e.target.value;
    // setUser({ ...user, [key]: val });
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    let val = e.target.value.toUpperCase();
    const list = books.filter((book) => book.title.toUpperCase().includes(val));
    setbookList(list);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(updateInfo(user));
    dispatch(addUser(user));
    setUser(initialState);
    Router.push("/login");
  };

  return (
    <div className="w-full flex items-center justify-around flex-wrap min-h-screen pt-20 sm:pl-72 bg-gray-100 gap-5">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">User </h3>
        <div className="p-2">Name: {currentUser.userInfo.firstName}</div>
        <div className="p-2">User Id: {currentUser.id}</div>
        <div className="p-3 h-48 bg-gray-100 rounded-lg">
          <b className="p-2">Issued Books</b>
          <ol>
            {currentUser.books.map((book, idx) => {
              return (
                <li key={idx} className="p-2">
                  {book.isbn}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="mt-4">
          <label className="block" htmlFor="date">
            Issue Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            //   value={date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="date">
            Return Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            //   value={"date"}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-4">
          <span className="block">Due: ${currentUser.payment}</span>
        </div>
      </div>
      <div className=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg w-full">
        <div className="w-full flex justify-between">
          <div>
            <label className="block m-3" htmlFor="search">
              Search Book
            </label>
            <input
              type="search"
              value={search}
              className=" text-black px-4 py-2 m-3
             border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={(e) => handleSearch(e)}
            />
          </div>

          <button className="bg-purple-400 rounded-lg p-2 h-10 text-center">
            Issue new Books
          </button>
        </div>
        <BookList books={bookList} />
      </div>
    </div>
  );
}

export default user;

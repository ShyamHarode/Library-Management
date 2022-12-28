import React, { useState } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../slices/userListSlice";
// import { updateInfo } from "../slices/userSlice";
import BookList from "../../components/BookList";
import books from "../../public/data/books.json";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
function user() {
  const [user, setUser] = useState(initialState);
  const [bookList, setbookList] = useState(books);
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleChange = (e) => {
    // let key = e.target.name;
    // let val = e.target.value;
    // setUser({ ...user, [key]: val });
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    let val = e.target.value.toUpperCase();
    const list = books.filter((book) => book.title.toUpperCase().includes(val));
    console.log(list);
    setbookList(list);
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
    Router.push("/login");
  };

  return (
    <div className="w-full flex items-center justify-around flex-wrap min-h-screen pt-20 sm:pl-72 bg-gray-100 gap-5">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">User </h3>
        <div className="p-2">Name: {currentUser.name}</div>
        <div className="p-2">User Id: {currentUser.id}</div>
        <div className="p-3 h-48 bg-gray-100 rounded-lg">
          <b className="p-2">Issued Books</b>
          <ol>
            {currentUser.books.map((book) => {
              return (
                <li key={book.isbn} className="p-2">
                  {book.title}
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
      <div className=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-auto sm:w-1/3">
        <div className="w-full">
          <label className="block m-3" htmlFor="search">
            Issue new Books
          </label>
          <input
            type="search"
            value={search}
            className=" text-black px-4 py-2 m-3
             border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <BookList books={bookList} />
      </div>
    </div>
  );
}

export default user;

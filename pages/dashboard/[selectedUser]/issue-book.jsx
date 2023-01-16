import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import BookList from "../../../components/BookList";
import { updateBooks } from "../../../slices/userListSlice";
import { resetCart, updateCartPayment } from "../../../slices/cartSlice";
import { setBookQuantity } from "../../../slices/bookSlice";

function issueBook() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.selectedUser);
  const userList = useSelector((state) => state.userList);
  const cart = useSelector((state) => state.cart);
  const books = useSelector((state) => state.books);

  const [currentUser, setCurrentUser] = useState(user);
  const [bookList, setBookList] = useState(books);
  const [payment, setPayment] = useState(0);
  const [returnDate, setReturnDate] = useState(Date.now());

  const handleSearch = (e) => {
    let val = e.target.value.toUpperCase();
    const list = books.filter((book) => book.name.toUpperCase().includes(val));
    setBookList(list);
  };

  const handleIssueBooks = () => {
    dispatch(
      updateBooks({ cart: cart.bookCart, user: currentUser, payment: payment })
    );
    dispatch(setBookQuantity(cart.bookCart));
    dispatch(resetCart());
  };
  const handleChange = (e) => {
    setReturnDate(Date.parse(e.target.value));
  };

  useEffect(() => {
    const selected = userList.find((u) => u.id === user.id);
    setCurrentUser(selected);
  }, [userList]);

  useEffect(() => {
    let currentDate = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    const differenceMs = returnDate - currentDate;
    if (differenceMs < 1) {
      setPayment(0);
    } else {
      let days = Math.ceil(differenceMs / oneDay) - 1;
      let amount = cart.bookCart.length * days * 10;
      setPayment(amount);
    }
    setBookList(books);
  }, [cart, returnDate]);

  return (
    <div className="w-full flex items-center justify-around flex-wrap min-h-screen pt-20 sm:pl-72 bg-gray-100 gap-5">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">User</h3>
        <div className="p-2 flex gap-4">
          <span>Name:</span> <strong>{currentUser.userInfo.firstName}</strong>
        </div>
        <div className="p-2 flex gap-3">
          <span>User Id:</span> <strong>{currentUser.id}</strong>
        </div>
        <div className="p-3 mt-3 h-48 bg-gray-100 rounded-lg">
          <div className="flex justify-between">
            <b className="p-2">Issued Books</b>
            <b className="p-2">Total Books {currentUser.books.length}</b>
          </div>
          <ol className=" h-32 overflow-y-scroll ">
            {currentUser.books.map((book, idx) => {
              return (
                <li key={idx} className="p-2">
                  {book.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="mt-2 text-center font-semibold">Calculate Charges</h3>
        <div className="mt-4 text-green-500">Free - Only for 1 day</div>

        <div className="mt-2 text-blue-600">Charges- $10/Day for each book</div>
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
        <div className="mt-4 flex justify-between">
          <span
            className="block"
            style={{ color: currentUser.payment > 0 ? "red" : "blue" }}
          >
            Due: ${currentUser.payment}
          </span>
          <span
            className="block"
            style={{ color: payment > 0 ? "red" : "blue" }}
          >
            Charges: ${payment}
          </span>
        </div>
      </div>
      <div className=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg w-full">
        <div className="w-full flex justify-between">
          <div>
            <label className="block m-2" htmlFor="search">
              Search Book
            </label>
            <input
              type="search"
              className=" text-black px-4 py-2 m-2
             border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div>
            <div className="m-2 p-2">{cart.length} Selected</div>

            <button
              onClick={() => handleIssueBooks()}
              className="bg-purple-400 rounded-lg p-2 h-10 text-center"
            >
              Issue Selected Books
            </button>
          </div>
        </div>
        <BookList books={bookList} payment={payment} />
      </div>
    </div>
  );
}

export default issueBook;

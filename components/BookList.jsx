import { useDispatch, useSelector } from "react-redux";
import { updateCart, updateCartPayment } from "../slices/cartSlice";

import React, { useEffect } from "react";
function BookList({ books, dashboard, payment }) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.selectedUser);
  const userList = useSelector((state) => state.userList);

  const dispatch = useDispatch();

  const handleDisable = (id) => {
    let currentUser = userList.find((u) => u.id === user.id);
    return currentUser.books?.some((i) => i.id == id);
  };
  useEffect(() => {
    dispatch(updateCartPayment(payment));
  }, [payment]);

  return (
    <div className="flex flex-wrap justify-around p-4 m-4 h-full text-gray-400 text-lg font-semibold bg-gray-100 border-2 border-gray-200 rounded-md gap-6">
      {books.map((book, idx) => {
        return (
          <div
            className="m-2 bg-white shadow-md rounded-lg max-w-sm focus:ring-4 focus:ring-orange-900 dark:bg-gray-800 dark:border-gray-700 w-52"
            key={idx + book.name}
          >
            {book.img.endsWith(".jpg") ? (
              <img
                className="rounded-t-lg p-4 w-48 h-60 mx-auto"
                src={`/images/${book.img}`}
                alt="book image"
              />
            ) : (
              <img
                className="rounded-t-lg p-4 w-48 h-60 mx-auto"
                src={
                  book.img.includes("http")
                    ? book.img
                    : "/images/No_Image_Available.jpg"
                }
                alt="book image"
              />
            )}

            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-gray-900 font-semibold  tracking-tight dark:text-white">
                  {book.name}
                </h3>
              </a>
              {dashboard && (
                <div
                  className="text-gray-900 text-base font-semibold tracking-tight dark:text-white"
                  style={{ color: book.qty > 0 ? "white" : "orangered" }}
                >
                  {book.qty > 0 ? "Available" : "Not Available"}
                  <span className="text-green-500 px-3">{book.qty}</span>
                </div>
              )}
              {!dashboard && (
                <div className="flex items-center justify-between gap-1">
                  <span
                    className="text-base text-gray-900 dark:text-white"
                    style={{ color: book.qty > 0 ? "white" : "orangered" }}
                  >
                    {book.qty > 0 ? `Available ${book.qty}` : "Not Available"}
                  </span>
                  {cart.bookCart.some((i) => i.id == book.id) ? (
                    <button
                      className="text-white bg-rose-700 hover:bg-rose-900 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                      onClick={() => dispatch(updateCart(book))}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => dispatch(updateCart(book))}
                      disabled={handleDisable(book.id) || book.qty < 1}
                      style={{
                        backgroundColor:
                          handleDisable(book.id) || book.qty < 1
                            ? "gray"
                            : "blue",
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;

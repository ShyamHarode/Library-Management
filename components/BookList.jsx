import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../slices/cartSlice";

function BookList({ books, dashboard }) {
  const [selectedBook, setSelectedBook] = useState();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.selectedUser);
  const dispatch = useDispatch();

  const handleDisable = (name) => {
    return user.books?.some((i) => i.name == name);
  };

  return (
    <div className="flex flex-wrap justify-around p-4 m-4 h-full text-gray-400 text-xl font-semibold bg-gray-100 border-2 border-gray-200 rounded-md gap-6">
      {books.map((book) => {
        return (
          <div
            className="m-2 bg-white shadow-md rounded-lg max-w-sm focus:ring-4 focus:ring-orange-900 dark:bg-gray-800 dark:border-gray-700 w-52"
            key={book.isbn}
          >
            <img
              className="rounded-t-lg p-4 w-48 mx-auto"
              src="/images/book.jfif"
              alt="product image"
            />

            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                  {book.name}
                </h3>
              </a>
              {dashboard && (
                <div className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                  Available
                  <span className="text-green-500 px-3">{book.qty} 8</span>
                </div>
              )}
              {!dashboard && (
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    $ {book.id}
                  </span>
                  {cart.some((i) => i.name == book.name) ? (
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
                      disabled={handleDisable(book.name)}
                      style={{
                        backgroundColor: handleDisable(book.name)
                          ? "gray"
                          : "blue",
                      }}
                    >
                      Add to cart
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

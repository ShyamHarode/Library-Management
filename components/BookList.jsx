import React from "react";

function BookList({ books }) {
  return (
    <div className="flex flex-wrap justify-around p-4 m-4 h-full text-gray-400 text-xl font-semibold bg-gray-100 border-2 border-gray-200 rounded-md gap-6">
      {books.map((book) => {
        return (
          <div
            class="m-2 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 w-52"
            key={book.isbn}
          >
            <img
              class="rounded-t-lg p-4 w-48 mx-auto"
              src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp"
              alt="product image"
            />

            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                  {book.title}
                </h3>
              </a>
              <div class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                Available
                <span className="text-green-500 px-3">{book.quantity} 8</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-gray-900 dark:text-white">
                  $ {book.price}
                </span>
                <a
                  href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;

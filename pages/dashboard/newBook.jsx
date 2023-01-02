import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../slices/bookSlice";

const initialState = {
  id: "",
  name: "",
  isbn: "",
  qty: "",
  date: "",
  img: "",
};

function newBook() {
  const [book, setBook] = useState(initialState);
  const bookList = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setBook({ ...book, [key]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook(initialState);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-12 pt-24 sm:pl-72 bg-gray-200">
      <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-md p-4">
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={book.name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Book Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  ISBN Number
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={book.isbn}
                  onChange={(e) => handleChange(e)}
                  placeholder="15-468-13651"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  min={0}
                  name="qty"
                  value={book.qty}
                  onChange={(e) => handleChange(e)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={book.date}
                  onChange={(e) => handleChange(e)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="img"
                  value={book.img}
                  onChange={(e) => handleChange(e)}
                  accept="image/*"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Add new Book
            </button>
          </div>
        </form>
      </div>
      <div className="mx-6 w-full max-w-[550px] max-h-[550px] bg-white text-center rounded-lg shadow-md p-4 ">
        <strong>Available books</strong>
        <div className="px-6 py-2 flex justify-between">
          <strong>Book</strong>
          <strong>Quantity</strong>
        </div>
        <ul className="p-3 overflow-y-auto">
          {bookList.map((b, idx) => {
            return (
              <li
                key={idx}
                className="px-4 py-2 flex justify-between hover:bg-gray-200"
              >
                <span>{b.name} </span> <span>{b.qty}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default newBook;

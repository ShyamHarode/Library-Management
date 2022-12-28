import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../slices/bookSlice";

const initialState = {
  name: "",
  isbn: "",
  qty: "",
  date: "",
  img: "",
};

function newBook() {
  // const [name, setName] = useState("");
  // const [isbn, setIsbn] = useState("");
  // const [qty, setQty] = useState("");
  // const [date, setDate] = useState("");
  // const [img, setImg] = useState("");
  const [book, setBook] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setBook({ ...book, [key]: val });
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));

    console.log("submit");
  };

  return (
    <div className="flex items-center justify-center gap-4 p-12 pt-24 sm:pl-72 bg-gray-200">
      <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-md p-4">
        <form>
          {console.log(book)}
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
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto w-full max-w-[550px] max-h-[550px]  bg-white rounded-lg shadow-md p-4 ">
        Available books
      </div>
    </div>
  );
}

export default newBook;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBooks } from "../slices/userListSlice";
import { resetCart } from "../slices/cartSlice";

function Cart() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
  const selected = useSelector((state) => state.selectedUser);

  const dispatch = useDispatch();

  const handleShow = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = () => {
    dispatch(updateBooks({ cart: cart, user: selected }));
    dispatch(resetCart());
    setShow(false);
  };

  return (
    <>
      <div className="font-sans block lg:inline-block align-middle text-gray-400 hover:text-black">
        <button className="relative flex" onClick={() => setShow(true)}>
          <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
          </svg>
          <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            {cart.length}
          </span>
        </button>
      </div>
      {show && (
        <div
          className="bg-gray-900/90 fixed left-0 top-0 w-full h-screen flex justify-center items-center z-20"
          onClick={() => setShow(false)}
        >
          <ol
            className="bg-white p-4 w-72 min-h-6 flex justify-center items-center flex-col rounded-lg"
            onClick={(e) => handleShow(e)}
          >
            <div className=" w-full text-center">
              Issue Books for <strong>{selected?.userInfo.username}</strong>
            </div>
            {cart.map((book, idx) => {
              return (
                <li key={idx} className="p-2">
                  {book.name}
                </li>
              );
            })}
            <div>
              <button
                className="bg-green-700 m-2 p-3 rounded-lg text-white"
                onClick={() => handleSubmit()}
              >
                Issue
              </button>
              <button
                className="bg-red-700 m-2 p-3 rounded-lg text-white"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </ol>
        </div>
      )}
    </>
  );
}

export default Cart;

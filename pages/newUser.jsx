import React from "react";

function newUser() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 class="text-2xl font-bold text-center">User Registration</h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block" for="id">
                User ID
              </label>
              <input
                type="readOnly"
                value={"5395"}
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block" for="Name">
                First Name
              </label>
              <input
                type="text"
                placeholder="Name"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block" for="Name">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Name"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div class="flex">
              <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default newUser;

import React from "react";

import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

function features() {
  return (
    <div>
      <div class="container mx-auto py-32 bg-orange-50 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-xl bg-gray-800 flex flex-col p-8">
          <div class="flex-grow text-white">
            <h2 class="text-xl title-font font-medium mb-3">Features</h2>
            <p class="leading-relaxed text-sm text-justify">Responsive UI</p>
            <p class="leading-relaxed text-sm text-justify">
              Login and Sign up
            </p>
            <p class="leading-relaxed text-sm text-justify">Admin Dashboard</p>
          </div>
        </div>
        <div class="rounded-xl bg-gray-800 flex flex-col p-8">
          <div class="flex-grow text-white">
            <h2 class="text-xl title-font font-medium mb-3">For Admin</h2>
            <p class="leading-relaxed text-sm text-justify">
              Create new User Account
            </p>
            <p class="leading-relaxed text-sm text-justify">Delete any User</p>
            <p class="leading-relaxed text-sm text-justify">
              Add new book in database
            </p>
            <p class="leading-relaxed text-sm text-justify">
              Issue books for User
            </p>
          </div>
        </div>
        <div class="rounded-xl bg-gray-800 flex flex-col p-8">
          <div class="flex-grow text-white">
            <h2 class="text-xl title-font font-medium mb-3">For User</h2>
            <p class="leading-relaxed text-sm text-justify">
              Check own profile
            </p>
            <p class="leading-relaxed text-sm text-justify">
              Check issued books
            </p>
            <p class="leading-relaxed text-sm text-justify">Update profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default features;
features.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer width={true} />
    </>
  );
};

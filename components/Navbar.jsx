function Navbar() {
  return (
    <header className="relative z-20">
      <div className="container-fluid header-container bg-white border-b-2 border-c_light p-4">
        <div className="flex items-center">
          <div>
            <div className="flex items-center">
              <div className="header__avatar__image mr-4 cursor-pointer xl:cursor-auto xl:pointer-events-none ">
                <img
                  className="header__avatar__img rounded-xl"
                  src="/img/org-avatar.png"
                  alt="org-avatar-image"
                />
              </div>
              <div className="hidden md:flex flex-col justify-center mr-2">
                <h2 className="m-0 text-base font-medium ">{}</h2>
                <p className="m-0 text-base text-c_gray">{}</p>
              </div>
            </div>
          </div>
          <div className="hidden xl:block ml-10">
            <div>
              <p className="m-0 font-medium">Message</p>
              <p className="m-0 text-base text-c_gray whitespace-nowrap ">
                Send your friends a message
              </p>
            </div>
          </div>
          <div className="header__search m-auto">
            <div className="flex-nowrap">
              <span className="z-10 leading-snug font-normal absolute text-center text-text-c_gray bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="bi bi-search text-base text-c_gray"></i>
              </span>
              <input
                type="text"
                placeholder="Search students"
                className="px-3 py-3 placeholder-text-c_gray text-blueGray-600 relative bg-c_light rounded text-base border-0 outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </div>

          <div className="flex justify-end ms-auto">
            <div className="flex items-center">
              <i className="bi bi-bell-fill text-lg mr-6 text-tertiary hover:text-primary cursor-pointer"></i>
              <div className="user__avatar__image mr-2">
                <img
                  className="user__avatar__img"
                  src={""}
                  alt="user-avatar-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

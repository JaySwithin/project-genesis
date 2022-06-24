const Navigation = () => {
  return (
    <header className="w-full h-14 border-b border-b-white flex gap-8  ">
      <div className="ml-20 ">
        {/* logo */}
        <h3 className="text-white h-full pt-2 text-2xl text-center">
          SwithAiks
        </h3>
      </div>

      <nav className="w-full flex justify-between gap-4">
        <ul className=" text-white flex w-2/4 justify-around items-center">
          <li>
            <a href="#">New</a>
          </li>

          <li>
            <a href="#">Clothing</a>
          </li>

          <li>
            <a href="#">Brands</a>
          </li>

          <li>
            <a href="#">About us</a>
          </li>
        </ul>

        <ul className=" text-white flex w-1/5 justify-around items-center">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

const Navigation = () => {
  return (
    <header>
      <nav className=" container flex flex-wrap justify-between items-center max-w-full border-b-2 border-b-neutral-200  h-14">
        <div className="flex flex-wrap ">
          {/* logo */}
          <h3 className="text-2xl">SwithAiks</h3>
        </div>

        <ul className="flex flex-wrap justify-around basis-2/5 text-sm">
          <li>
            <a>New</a>
          </li>
          <li>
            <a>Clothing</a>
          </li>
          <li>
            <a>Brands</a>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>

        <ul className="flex flex-wrap justify-around basis-1/5  ml-auto ">
          <li>
            <a>
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
            {/* Search Icon */}
          </li>
          <li>
            <a>
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
            {/* Cart Icon */}
          </li>
          <li>
            <a>
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
            </a>{" "}
            {/* User Icon */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

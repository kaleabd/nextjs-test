import React, { useState } from "react";
import Navigation from "./navigation";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/navbarSlice";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const searchValue = useSelector((state: any) => state.navbar.searchValue);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearchChange = (event: any) => {
    const newValue = event.target.value;
    dispatch(setSearchValue(newValue));
  };

  const handleSearchClick = () => {
    router.push("/products");
  };

  return (
    <>
      <section className="header bg-gray-10 border-b dark:bg-gray-900 dark:border-opacity-10">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4">
            <div className="flex-none z-10	">
              <Link href="/">
              <h3 className=" text-xl font-bold">Gulit-Gebeya</h3>
              </Link>
            </div>
            <div className=" flex items-center text-md ">
              <input
                type="text"
                value={searchValue}
                className="w-[85%] md:w-[400px] rounded-md pl-10 py-[.5rem] outline-none bg-[#F6F6F6] placeholder-[#727272]"
                placeholder="Search products..."
                onClick={handleSearchClick}
                onChange={handleSearchChange}
              />
            </div>
            <div
              className="flex-none  gap-4 lg:hidden"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              <h1 className="font-bold text-lg">Menu</h1>
            </div>

            <div
              className={`lg:flex flex-col lg:flex-row lg:items-center lg:justify-center text-sm w-full lg:w-auto z-0	${
                mobileMenuIsOpen ? `block animate-slideIn` : `hidden`
              }`}
            >
              <div className={`${mobileMenuIsOpen ? `p-2 	` : ` float-right`}`}>
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

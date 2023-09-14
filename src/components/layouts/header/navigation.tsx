import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="md:block lg:flex lg:gap-8 ">
        <div className="py-2 border-b-2 border-opacity-10 border-gray-100	lg:border-0">
          <Link href="/">
            <a className="dark:text-skin-white">Home</a>
          </Link>
        </div>
        <div className="py-2 border-b-2 border-opacity-10 border-gray-100	lg:border-0">
          <Link href="/products">
            <a className="dark:text-skin-white">Products</a>
          </Link>
        </div>
        <div className="py-2 border-b-2 border-opacity-10 border-gray-100	lg:border-0">
          <Link href="/carts">
            <a className="dark:text-skin-white">carts</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;

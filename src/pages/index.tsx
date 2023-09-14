import Head from "next/head";
import Image from "next/image";
import Products from "./products";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <div className="bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            <span className="block dark:text-blue-50">Ready to dive in?</span>
            <span className="block text-blue-600">
              buy products with 50% less prices here
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-50 dark:border-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
}

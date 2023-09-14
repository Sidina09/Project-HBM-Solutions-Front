import { useState } from "react";
import { Transition } from '@headlessui/react'
import { Link } from "react-router-dom";


export default function NavBar() {

  //
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  const [changeBackground, setChangeBackground] = useState(true)
  const changeBack = () => {
    if (window.scrollY >= 5) { setChangeBackground(true) }
    else {
      setChangeBackground(false)
    }
  }
  window.addEventListener('scroll', changeBack)

  return (
    <header className="py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <img className="w-auto h-8" src="LOGO" alt="" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button onClick={handleOpen} type="button" className="text-gray-900">

              {open ?
                <span aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                :
                <span aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
              }
            </button>
          </div>

          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 1 </a>

            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 2 </a>

            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 3 </a>
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">

            <Link
              to='documents'
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Commencer
            </Link>
          </div>
        </div>
        <Transition
          show={open}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
          className="block lg:hidden"
        >
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 1 </a>

              <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 2 </a>

              <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Link 3 </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Commencer
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </header >
  );
}
import React from 'react';
import Link from 'next/link';
import cx from 'clsx';

// Nav sample from: https://tailwindui.com/components/application-ui/navigation/navbars

const Header: React.FC = () => (
  <nav className="bg-steel-300">
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* <!-- Mobile menu button--> */}
          {/* <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-steel-400 hover:text-white hover:bg-steel-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">メインメニューを開く</span>

              <svg
                onClick={() => setIsMenuOpen(true)}
                className={cx(`w-6 h-6`, isMenuOpen ? `hidden` : `block`)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                onClick={() => setIsMenuOpen(false)}
                className={cx(`w-6 h-6`, isMenuOpen ? `block` : `hidden`)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
        </div>
        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              {/* <a className="focus:outline-none">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </a> */}
              <p className="text-xl font-bold text-white">MisoHost</p>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-auto">
            <div className="flex space-x-4">
              {/* <Link href="/">
                  <a
                    className={cx(
                      `px-3 py-2 text-sm font-medium`,
                      router.pathname === `/`
                        ? `text-white bg-steel-400 rounded-md`
                        : `text-steel-300 rounded-md hover:bg-steel-700 hover:text-white`,
                    )}
                  >
                    Home
                  </a>
                </Link> */}
              <a
                href="https://server.misohost.com/register.html"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                アカウント登録
              </a>
              <a
                href="https://server.misohost.com/"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                ログイン
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className={cx(`sm:hidden`, isMenuOpen ? `block` : `hidden`)}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a
              className={cx(
                `block px-3 py-2 text-base font-medium`,
                router.pathname === `/`
                  ? `text-white bg-steel-400 rounded-md`
                  : `text-steel-300 rounded-md hover:bg-steel-700 hover:text-white`,
              )}
            >
              Home
            </a>
          </Link>
        </div>
      </div> */}
  </nav>
);

export default Header;

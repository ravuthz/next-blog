/* eslint-disable @next/next/no-img-element */

import { NavLink } from "./NavLink";

export default function NavBar() {
  return (
    <div className="bg-neutral-800">
      <nav className="container py-2 mx-auto">
        <ul className="flex space-x-6 text-lg justify-center">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/ravuthz/nextjs-starter-blog">
              Github
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function NavBar2({ menus }: any) {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav
        className="flex h-9 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">NextJS</span>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>

        <div className="flex min-w-0 flex-1 justify-center gap-x-12">
          {menus.map((item: any) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-900 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          {/* <a
                    href="#"
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log in
                  </a> */}
        </div>
      </nav>
    </div>
  );
}

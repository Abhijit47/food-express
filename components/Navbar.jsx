"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import {
  HeroiconsOutlineMenu,
  HeroiconsChevronDownSolid,
} from "@/assets/icons";

import navLogo from "@/public/nav-logo.svg";
import { classNames } from "@/lib/helpers";
import Button from "./Button";
import { navLinks } from "@/constants";
import NavbarPopOver from "./NavbarPopOver";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 mb-8 shadow-sm">
      <Popover className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="focus:outline-none">
              <span className="sr-only">Food Express</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src={navLogo.src}
                alt="Navlogo"
                width={200}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-amber-100 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
              <span className="sr-only">Open menu</span>
              <HeroiconsOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-amber-500" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-amber-500 focus:outline-none",
                    )}
                  >
                    <span>Solutions</span>
                    <HeroiconsChevronDownSolid
                      className={classNames(
                        open ? "text-amber-500" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-amber-500",
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {navLinks.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-amber-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-amber-500 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end gap-x-4 md:flex md:flex-1 lg:w-0">
            <SignedOut>
              <Button buttonName="Sign in" btnHref={"/sign-in"}>
                Sign in
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                afterSwitchSessionUrl="/"
                afterMultiSessionSingleSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </div>

        <NavbarPopOver />
      </Popover>
    </header>
  );
}

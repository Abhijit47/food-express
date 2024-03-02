"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

import { HeroiconsOutlineX } from "@/assets/icons";
import { navLinks } from "@/constants";
import navLogo from "@/public/nav-logo.svg";
import Button from "./Button";

export default function NavbarPopOver() {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <Link href={"/"} className="focus:outline-none">
                  <span className="sr-only">Food Express</span>
                  <Image
                    className="h-8 w-auto"
                    src={navLogo.src}
                    alt="Navlogo"
                    width={200}
                    height={50}
                    priority
                  />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-amber-100 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                  <span className="sr-only">Close menu</span>
                  <HeroiconsOutlineX className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-amber-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-amber-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="mt-6 grid">
              <SignedOut>
                <Button buttonName="Sign up" btnHref={"/sign-up"}>
                  Sign up
                </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    href="/sign-in"
                    className="text-stone-800 hover:text-amber-500"
                  >
                    Sign in
                  </Link>
                </p>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-x-2">
                  <UserButton
                    afterSignOutUrl="/"
                    afterSwitchSessionUrl="/"
                    afterMultiSessionSingleSignOutUrl="/"
                  />
                  {isSignedIn ? (
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      {user.firstName}
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                      <svg
                        className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      No name
                    </span>
                  )}
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

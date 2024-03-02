"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { maskString } from "@/lib/helpers";
import { HeroiconsOutlineX } from "@/assets/icons";
import EditForm from "./EditForm";

export default function EditFormModal({ isOpen, onToggle, recipe }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-20 w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <h3>
                    Edit Recipe{" "}
                    <span className="text-xs">#{maskString(recipe?._id)}</span>
                  </h3>
                  <button
                    onClick={onToggle}
                    className="hover:text-amber-500 focus:outline-none"
                  >
                    <HeroiconsOutlineX className="size-6" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <EditForm recipe={recipe} onToggle={onToggle} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

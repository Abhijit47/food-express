"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDeleteRecipeMutation } from "@/lib/services/myRecipeService";
import { HeroiconsOutlineX } from "@/assets/icons";
import { maskString } from "@/lib/helpers";

export default function DeleteConfirmModal({ isOpen, onToggle, recipe }) {
  const [deleteRecipe, { isLoading, isError, error }] =
    useDeleteRecipeMutation();

  async function handleDelete(recipeId) {
    await deleteRecipe(recipeId);
    onToggle();
  }

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <h3 className="text-sm">
                    Are you sure you want to delete this recipe‼️
                  </h3>
                  <button onClick={onToggle}>
                    <HeroiconsOutlineX className="size-6" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <span className="text-xs">#{maskString(recipe?._id)}</span>
                  <p className="text-xs text-gray-500">
                    * If you press the confirm button, your recipe will be
                    permanently deleted. Please ensure that you are absolutely
                    certain before proceeding with the deletion.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => handleDelete(recipe?._id)}
                  >
                    Confirm
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

"use client";

import { HeroiconsTrash } from "@/assets/icons";
import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function DeleteButton({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((open) => !open);
  }

  return (
    <div>
      <button
        className="rounded-sm p-1 hover:text-red-500 hover:ring-1 hover:ring-amber-500"
        onClick={toggleModal}
      >
        <HeroiconsTrash className="size-4" />
      </button>
      <DeleteConfirmModal
        isOpen={isOpen}
        onToggle={toggleModal}
        recipe={recipe}
      />
    </div>
  );
}

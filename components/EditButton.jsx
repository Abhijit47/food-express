import { useState } from "react";
import EditFormModal from "./EditFormModal";
import { HeroiconsPencilSquare } from "@/assets/icons";

export default function EditButton({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((open) => !open);
  }

  return (
    <div>
      <button
        className="rounded-sm p-1 hover:text-amber-500 hover:ring-1 hover:ring-amber-500"
        onClick={toggleModal}
      >
        <HeroiconsPencilSquare className="size-4" />
      </button>
      <EditFormModal isOpen={isOpen} onToggle={toggleModal} recipe={recipe} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import NewPostModal from "../modals/NewPostModal";

const NewPostButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="mt-6 w-full hidden lg:block px-4 py-2 rounded-full bg-slate-700 text-white border border-slate-700 hover:bg-white hover:text-slate-700 cursor-pointer transition-all ease-in duration-500 hover:bg-opacity-10 shadow-md hover:shadow-lg"
        onClick={() => setModalOpen(true)}
      >
        <p className="hidden lg:block text-center font-semibold text-sm">
          Share
        </p>
        <span className="sr-only">Open actions menu</span>
      </button>
      <NewPostModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default NewPostButton;

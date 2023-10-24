'use client'

import React, {useState} from 'react'
import NewPostModal from '../modals/NewPostModal';

const NewPostButton = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="fixed bottom-4 group">
        <button
          className="flex items-center justify-center text-white bg-pink-500 rounded-full w-10 h-10 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
          onClick={() => setModalOpen(true)}
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>

      <NewPostModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default NewPostButton
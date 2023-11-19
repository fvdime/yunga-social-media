"use client";

import axios from "axios";
import React, { useRef, useState } from "react";

const NewPostModal = ({ open, onClose }) => {
  // NOT WORKING
  const wrapperRef = useRef();

  const onCloseHandle = (event) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      return;
    } else {
      onClose();
    }
  };

  if (!open) return <></>;

  // const handleImageChange = (e) => {
  //   setImage(e.target.image[0])
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!image || !body) {
    //   return <></>
    // }

    // const formData = new FormData();
    // formData.append("image", image);
    // formData.append("body", body);

    const formData = new FormData(e.target);
    const image = formData.get("image");
    const body = formData.get("body");

    console.log(image, body)

    try {
      const res = await axios.post("http://localhost:3000/api/post", {
        image, body
      });

      // const res = await fetch("http://localhost:3000/api/post", {
      //   method: "POST",
      //   body: JSON.stringify({ image, body }),
      // });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="fixed z-40 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={onCloseHandle}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow" ref={wrapperRef}>
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6">
              <div className="text-2xl text-bold">New Post</div>
              {/* <form onSubmit={handleSubmit}>
                <div className="flow-root self-start">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0 justify-start">
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            IMAGE
                          </label>
                          <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            type='file'
                            // onChange={handleImageChange}
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0 justify-start">
                          <label className="mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Description..."
                            // value={desc}
                            // onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between">
                  
                  <button
                    type="button"
                    className="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm inline-flex items-center px-7 py-2.5 text-center mr-2"
                  >
                    Save
                  </button>
                </div>

              </form> */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    desc
                  </label>
                  <input
                    type="text"
                    name="body"
                    id="body"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
                <button
                    type="button"
                    className="w-full text-gray-900 bg-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;

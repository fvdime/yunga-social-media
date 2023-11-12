import Link from "next/link";
import React from "react";
import NewPostButton from "@/components/feed-props/NewPostButton";
import getUsers from "@/actions/getUsers";
// import getCurrentUser from "@/actions/getCurrentUser";

const Layout = ({ children }) => {

  // const {currentUser} = getCurrentUser()

  // console.log({currentUser})

  // const users = getUsers()

  // if (users.length === 0) {
  //   return <></>
  // }
  // console.log(users)
  return (
    <>
      <div className="layout w-full px-0 lg:px-10 pb-1 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
        <div className="w-full flex gap-2 lg:gap-4 pt-5 h-full">
          {/* LEFT */}
          {/* <div className="hidden w-1/3 lg:w-1/4 h-screen md:flex flex-col gap-6 overflow-y-auto">
            {currentUser?.username}
          </div> */}

          {/* CENTER */}
          <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto rounded-lg">
            {children}
            <NewPostButton />
          </div>

          {/* RIGHT */}
          <div className="hidden w-1/4 h-screen lg:flex flex-col gap-8 overflow-y-auto">
            {/* SUGGESTED FRIENDS */}
            <div className="w-full bg-primary shadow-sm rounded-lg px-5 py-5">
              <div className="flex items-center justify-between text-lg text-ascent-1 border-b border-[#66666645]">
                <span>Friend Suggestion</span>
              </div>
              <div className="w-full flex flex-col gap-4 pt-4">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="w-full flex gap-4 items-center cursor-pointer"
                  >
                    <div className="flex-1 ">
                      <p className="text-base font-medium text-ascent-1">
                      {/* {users?.name} */}
                      jsdjakjs
                      </p>
                      <span className="text-sm text-ascent-2">aaaaa</span>
                    </div>
                  </Link>
                  <div className="flex gap-1">
                    <button className="bg-[#0444a430] text-sm text-white p-1 rounded">
                      something
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

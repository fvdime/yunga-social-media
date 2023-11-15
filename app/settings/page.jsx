import React from "react";
import { store } from "@/stores";
import { fetchUser } from "@/stores/user-store";
import getToken from "@/libs/getToken";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from "next/image";

const SettingPage = async () => {
  const token = getToken();
  // console.log(token)
  // await store.dispatch(fetchUser(token))
  // console.log(store.getState().user)

  const currentUser = await getCurrentUser(token);
  // console.log(currentUser)
  return (
    <div>
      <h1>SETTINGS</h1>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <Image
            className="my-4 rounded-full shadow-lg object-cover"
            src="/cool.jpg"
            height={96}
            width={96}
            alt="user image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {currentUser.username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

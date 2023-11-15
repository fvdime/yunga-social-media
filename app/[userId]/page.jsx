import getCurrentUser from "@/actions/getCurrentUser";
import getUser from "@/actions/getUser";
import getToken from "@/libs/getToken";
import Image from "next/image";

const ProfilePage = async ({ params }) => {
  const userInfo = await getUser(params.userId);

  return (
    <div>
      <div className="w-full border-b drop-shadow-md">
        <div className="flex flex-col items-center pb-10">
          <Image
            src="/handsome.jpg"
            alt="profile image"
            height={96}
            width={96}
            className="rounded-full object-cover"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {userInfo.name}
          </h5>
          <span className="text-sm text-gray-500">{userInfo.username}</span>
          <span className="text-sm text-gray-500">{userInfo?.bio}</span>

          <div className="flex mt-4 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

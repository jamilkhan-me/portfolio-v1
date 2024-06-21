import Image from "next/image";
import Link from "next/link";

const ProfileHeader = () => {
  return (
    <div className="">
      {/* Banner Image */}
      <div className="relative h-48">
        <Image
          src="/banner.jpeg"
          alt="Profile banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="px-4 pb-4">
        {/* Profile Picture and Edit Button */}
        <div className="flex justify-between items-end -mt-16">
          <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden z-50">
            <Image
              src="/image1.jpg"
              alt="Profile picture"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* <button className="bg-transparent border border-gray-600 text-white px-4 py-1.5 rounded-full text-sm">
            Edit profile
          </button> */}
        </div>

        {/* User Info */}
        <div className="mt-3">
          <h1 className="text-xl font-bold">Jamil Khan</h1>
          {/* <p className="text-gray-400">@JamilkhanInfo</p> */}
        </div>

        {/* Bio */}
        <div className="mt-3 space-y-2">
          <p>PhD Researcher @UniWestminster.</p>
          <p>Full-Stack Developer</p>
          <div className="flex items-center space-x-4 text-gray-400">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              London, United Kingdom
            </span>
            {/* <Link
              href="https://jamilkhan.me"
              className="text-blue-400 hover:underline"
            >
              jamilkhan.me
            </Link>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Joined December 2013
            </span> */}
          </div>
        </div>

        {/* Following/Followers */}
        {/* <div className="mt-3 flex space-x-4 text-gray-400">
          <span>
            <strong className="text-white">229</strong> Following
          </span>
          <span>
            <strong className="text-white">102</strong> Followers
          </span>
        </div> */}

        {/* Tabs */}
        <div className="mt-4 border-b border-gray-800">
          <nav className="flex">
            {navigation.map((title, index) => (
              <Link
                key={title.title}
                href={title.link}
                className={`mr-8 py-4 hover:text-blue-400 focus:text-blue-400 hover:border-b-2 active:border-b-2 focus:border-b-2 border-blue-400 text-gray-500"
                }`}
              >
                {title.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

export const navigation = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
  { title: "Project", link: "/project" },
  { title: "Book Note", link: "/bookNote" },
];

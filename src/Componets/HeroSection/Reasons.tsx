import { MdTv } from "react-icons/md";
import { FaDownload, FaChild } from "react-icons/fa";
import { TbDeviceDesktop } from "react-icons/tb";

const reasons = () => {
  return (
  
    <section className="relative z-10 w-full text-white text-start py-12 px-4 md:px-8 lg:px-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 px-4">
          More reasons to join
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Watch Anywhere Card */}
          <div className="min-h-[16rem] p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Watch anywhere</h3>
              <p className="text-gray-300 flex-grow">
                Enjoy on your TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
              <MdTv
                className="mt-4 w-10 h-10 md:w-12 md:h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300 self-end"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0" />
          </div>

          {/* Download Shows Card */}
          <div className="min-h-[16rem] p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Download to watch offline</h3>
              <p className="text-gray-300 flex-grow">
                Save your favorites easily and always have something to watch.
              </p>
              <FaDownload
                className="mt-4 w-10 h-10 md:w-12 md:h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300 self-end"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0" />
          </div>

          {/* Watch Everywhere Card */}
          <div className="min-h-[16rem] p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Watch everywhere</h3>
              <p className="text-gray-300 flex-grow">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
              <TbDeviceDesktop
                className="mt-4 w-10 h-10 md:w-12 md:h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300 self-end"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0" />
          </div>

          {/* Kids Profiles Card */}
          <div className="min-h-[16rem] p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Create profiles for kids</h3>
              <p className="text-gray-300 flex-grow">
                Send kids on adventures with their favorite characters in a space made just for them.
              </p>
              <FaChild
                className="mt-4 w-10 h-10 md:w-12 md:h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300 self-end"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default reasons;
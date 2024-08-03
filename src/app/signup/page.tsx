import Char2 from "../images/Char2.svg";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";

export default function Signup() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-borderlighterblue">
        <div className="bg-white shadow-md rounded-3xl border border-black p-10 flex w-10/12 h-[90vh]">
          <div className="w-3/5 flex flex-col justify-start items-start">
            <div className="mb-4 pl-32">
              <h1 className="text-6xl font-thin font-inter text-textdarkblue mb-2" style={{ fontWeight: 200 }}>Hello,</h1>
              <h2 className="text-6xl font-inter text-textdarkblue">Welcome</h2>
            </div>
            <div className="flex-1 flex flex-col justify-center w-4/5">
              <div className="absolute h-96 w-full bg-transparent rounded-lg -left-64">
              <img src={Char2.src} alt="Character2" className="object-contain h-full w-full" />
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-start px-8 bg-borderlighterblue rounded-3xl ml-8 pt-4">
            <h2 className="pb-2 text-5xl font-bold mb-8 text-center text-blue-900 w-full">ShortForm</h2>
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="relative">
                <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
                  {/* <input
                    type="text"
                    placeholder="Email"
                    className="font-inter px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <div className="absolute left-3 top-2/4 transform -translate-y-1/2 w-6 h-6 bg-transparent"><img src={icon2.src} alt="Profile" className="object-contain h-full w-full" /></div> */}
                </div>
              </div>
              <div className="flex flex-col space-y-2 pb-8">
                <div className="relative">
                <div>
                <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <label htmlFor="Confirm password" className="block pt-3 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="Confirm password"
                name="Confirm password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            </div>
                  {/* <input
                    type="password"
                    placeholder="New Password"
                    className="font-inter px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  /> */}
                  {/* <div className="absolute left-3 top-2/4 transform -translate-y-1/2 w-6 h-6 bg-transparent"><img src={icon1.src} alt="Lock" className="object-contain h-full w-full" /></div> */}
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {/* <button
                  type="submit"
                  className="bg-borderlightblue text-black font-inter py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Log in
                </button> */}
              </div>
            </form>
            <p className="text-center  bg-borderlightblue rounded-2xl py-3">
              <a href="#" className="text-black font-inter hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
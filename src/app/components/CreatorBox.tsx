import Char1 from "../images/Char1.svg";

export default function CreatorBox() {
    return (
        <div className="flex items-center justify-center bg-transparent w-full h-3/5 pt-10">
            <div className="bg-white w-3/4 h-full p-6 rounded-lg shadow-lg flex">
                <div className="flex-grow">
                    <div>
                        <h1 className="text-3xl text-blue-500 font-bold">Find and Hire Creators with</h1>
                        <h2 className="text-3xl text-blue-500">ShortForm</h2>
                    </div>
                    <div className="mt-4 flex justify-end items-baseline pr-96 pt-28">
                        <input type="text" placeholder="Find a creator" className="border rounded-lg p-2 flex-grow text-xl text-gray-700" />
                        <span className="text-black text-xl px-2">or</span>
                        <button className="bg-blue-500 text-white rounded-lg px-4 text-xl py-2 whitespace-nowrap">Become One</button>
                    </div>
                </div>
                <div className="flex justify-center bg-transparent h-72 w-96 -ml-80">
                    <img src={Char1.src} alt="Character" className="object-contain h-full w-full" />
                </div>
            </div>
        </div>
    );
}
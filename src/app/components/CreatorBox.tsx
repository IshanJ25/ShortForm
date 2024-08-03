import Char1 from "../images/Char1.svg";
import Link from 'next/link';

export default function CreatorBox() {
    return (
        <div className="flex items-center justify-center bg-transparent w-full h-3/5 pt-10 pb-3">
            <div className="bg-white w-11/12 h-full p-6 rounded-xl shadow-lg flex relative">
                <div className="flex-grow">
                    <div className="pt-10">
                        <h1 className="text-5xl text-textdarkblue font-inter">Find and Hire Creators with</h1>
                        <h2 className="text-5xl text-textblue font-bold pt-2">ShortForm</h2>
                    </div>
                    <div className="mt-4 flex justify-end items-baseline pr-96 pt-32 pb-8">
                        <input type="text" placeholder="Find a creator" className=" bg-gray-200 rounded-lg px-5 py-4 flex-grow text-xl font-inter text-gray-700" />
                        <span className="text-black text-xl px-2 font-inter">or</span>
                        <Link href="/Become">
                        <button className="bg-borderlightblue text-white rounded-lg px-5 text-xl py-4 whitespace-nowrap font-inter">Become One</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute -right-3 bottom-1 h-[160%]] w-[36%] flex justify-center items-end">
                    <img src={Char1.src} alt="Character" className="object-contain h-full w-full" />
                </div>
            </div>
        </div>
    )
}
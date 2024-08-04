import Link from 'next/link';

export default function Topbar() {
    return (
        <div className="bg-transparent text-black p-4 flex justify-between items-center">
            <div className="pl-10 flex items-baseline space-x-12">
            <Link href="/Profile">
            <button className="text-3xl font-el-messiri">
            ShortForm
            </button>
            </Link>
                <div className="font-inter text-xl">Top Creators</div>
                <div className="font-inter text-xl">Find Creators</div>
            </div>
            <div className="flex justify-center items-baseline space-x-3 mr-10">
                <Link href="/signup">
                    <button className="bg-borderlightblue hover:bg-blue-500 text-white text-xl font-inter py-2 px-4 rounded">Sign Up</button>
                </Link>
                <Link href="/login">
                    <button className="bg-transparent hover:bg-borderlightblue text-black text-xl font-inter py-2 px-2 rounded">Login</button>
                </Link>
            </div>
        </div>
    )
}

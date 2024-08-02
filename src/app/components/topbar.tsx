export default function topbar(){
    return(
        <div className="bg-transparent text-white p-4 flex justify-between items-center">
      <div className="pl-10 flex items-baseline space-x-12">
        <div className="font-bold text-3xl ">ShortForm</div>
        <div className="font-bold ">Top Creators</div>
        <div className="font-bold ">Find Creators</div>
      </div>
      <div className=" flex items-baseline space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded">Sign Up</button>
        <button className="bg-transparent hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded">Login</button>
      </div>
    </div>
    )
}
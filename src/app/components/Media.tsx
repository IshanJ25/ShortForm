export default function Media(){
    return(
        <div className="bg-bgdefault p-4 w-10/12 ml-24 mt-10">
        <div className="bg-white p-4 rounded mb-4"> 
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button className=" hover:border-b-2 text-2xl  text-textdarkblue pb-1 hover:border-textdarkblue">Reels</button>
              <button className="text-textdarkblue text-2xl pb-1 hover:border-b-2 hover:border-textdarkblue">Post</button>
            </div>
            <button className="bg-borderlightblue text-2xl text-white px-4 py-1 rounded">Add</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-300 h-96 rounded-2xl" ></div>
          <div className="bg-gray-300 h-96 rounded-2xl"></div>
        </div>
      </div>
    )
}
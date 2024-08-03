export default function TopCreators(){
    return(
        <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 w-11/12 flex justify-center">
          <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-left pr-28" style={{ marginLeft: '-16px' }}>Top Creators</h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-16  justify-items-center">
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
              <div className="bg-gray-400 rounded-lg w-64 h-72"></div>
            </div>
          </div>
        </div>
      </div>   
    )
}
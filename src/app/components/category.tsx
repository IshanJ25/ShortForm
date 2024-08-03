

export default function Categor(){
  return (
    <div className="bg-bgdefault p-4 rounded-md flex items-center">
      <div className="w-1/3 pr-4">
        <h3 className="text-textdarkblue font-inter mb-2 pl-10 text-2xl">Job Category</h3>
      </div>
      <div className="w-2/3 flex space-x-4 text-textdarkblue">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-center text-lg font-inter text-textdarkblue"
          placeholder="Category"
        />
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md text-center text-lg font-inter text-textdarkblue "
          placeholder="Sub-Category"
        />
      </div>
    </div>
  );
};

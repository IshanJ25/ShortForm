

export default function JobDescription() {
  return (
    <div className="bg-transparent p-4 rounded-md flex items-center">
      <div className="w-1/3 pr-4">
        <h3 className="text-textdarkblue font-inter mb-2 pl-10 text-2xl">Job Description</h3>
        <p className="text-textdarkblue font-inter pl-10 text-xl">
          Enter your job title and <br /> remember to include <br /> keywords
        </p>
      </div>
      <div className="w-2/3">
        <textarea
          rows={4} // Adjust the number of rows here
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder=""
        ></textarea>
      </div>
    </div>
  )
}
    

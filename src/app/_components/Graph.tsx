import React from "react";

const Graph = () => {
  return (
    <div className="py-5 grid lg:grid-cols-5 ml-24 px-4  items-center lg:gap-8 gap-4">
      <div className="lg:col-span-3 col-span-1 p-4 bg-white  rounded-lg">
        <div className="flex justify-center h-80">
          <h2>Bar Graph</h2>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 p-4 bg-white rounded-lg">
        <div className="h-80">
            <h2 className="text-center">Setting</h2>
        </div>
      </div>
    </div>
  );
};

export default Graph;

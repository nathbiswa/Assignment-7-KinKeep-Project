import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FrinedContext } from "../../ContextShare/Context/Context";
import { ImFilesEmpty } from "react-icons/im";

const StatsPage = () => {
  const { selectedMessageFriend, selectedFriend, selectedVideoFriend } =
    useContext(FrinedContext);
  const data = [
    { name: "Text", value: selectedMessageFriend.length, fill: "#7E35E1" },
    { name: "Call", value: selectedFriend.length, fill: "#244D3F" },
    { name: "Video", value: selectedVideoFriend.length, fill: "#37A163" },
  ];
  if (
    selectedFriend.length === 0 &&
    selectedMessageFriend.length === 0 &&
    selectedVideoFriend.length === 0
  ) {
    return (
      <div className="bg-base-200 py-14 space-y-2">
        <div className="flex justify-center items-center text-4xl">
          <ImFilesEmpty />
        </div>
        <div className="flex justify-center items-center text-4xl">
          Stats is Empty!
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#ebedf0] min-h-6 md:min-h-[90vh]">
      <div className="w-8/12 mx-auto py-3 md:py-6">
        <h1 className="text-[12px] md:text-4xl font-bold">Friendship Analytics</h1>
      </div>

      <div className="  w-full h-4/12 md:w-8/12 md:h-5/12 m-auto flex justify-center p-4 rounded  bg-white">
        <h2 className=" w-full text-[8px] md:text-xl text-gray-500">By Interaction Type</h2>
        <PieChart
        //   style={{
        //     width: "100%",
        //     maxWidth: "600px",
        //     maxHeight: "50vh",
        //     aspectRatio: 1,
        //   }}
        className="w-[250px] h-[200px] md:w-full md:min-h-[50vh] mr-10 md:mr-0 mx-auto"
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
       
      </div>
    </div>
  );
};

export default StatsPage;

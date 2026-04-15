import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FrinedContext } from "../../ContextShare/Context/Context";

const StatsPage = () => {
     const {selectedMessageFriend, selectedFriend, selectedVideoFriend} = useContext(FrinedContext);
  const data = [
    { name: "Text", value: selectedMessageFriend.length, fill: "#7E35E1" },
    { name: "Call", value: selectedFriend.length, fill: "#244D3F" },
    { name: "Video", value: selectedVideoFriend.length, fill: "#37A163" },
  ];
  return (
    <div className="bg-[#919497] min-h-[90vh]">
        <div className="w-8/12 mx-auto py-6">
            <h1 className="text-4xl font-bold">Friendship Analytics</h1>
        </div>
            
      <div className=" w-8/12 h-5/12 m-auto flex justify-center p-4 rounded  bg-white">
        <h2 className="text-xl block text-gray-500">By Interaction Type</h2>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "600px",
            maxHeight: "50vh",
            aspectRatio: 1,
          }}
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
          <Legend className="mt-4" />
          <Tooltip />
        </PieChart>
        <div className="py-3"></div>
      </div>
    </div>
  );
};

export default StatsPage;

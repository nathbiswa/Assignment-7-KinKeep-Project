import React, { useContext } from "react";
import { FrinedContext } from "../../ContextShare/Context/Context";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";

const TimeLInePage = () => {
  const { selectedFriend } = useContext(FrinedContext);
  console.log(selectedFriend);
  const {selectedMessageFriend} = useContext(FrinedContext);
  const {selectedVideoFriend} = useContext(FrinedContext);
  if (
    selectedFriend.length === 0 &&
    selectedMessageFriend.length === 0 &&
    selectedVideoFriend.length === 0
) {
    return <div className="bg-base-200 py-14 space-y-2">
        <div className="flex justify-center items-center text-4xl"><ImFilesEmpty /></div>
        <div className="flex justify-center items-center text-4xl">Time line is Empty!</div>
        </div>
}
  const today = new Date();
    const formattedDate = today.toLocaleDateString();
  return (
    <div className="bg-[#F8FAFC] py-10">
      <div className="w-10/12 mx-auto">
        <div>
          <h2 className="text-2xl font-bold py-2">Timeline</h2>
        </div>
        <div>
          {selectedFriend.map((friend, index) => {
            return (
              <div key={index} className="flex items-center gap-5 bg-base-100 rounded-xl p-5 my-3">
                <div>
                  <FaPhoneVolume className="mx-auto mb-1" />
                </div>
                <div>
                  <span className="text-xl font-bold">Call</span> <span>wiht</span> {friend.name}
                  <h2>{formattedDate}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {selectedMessageFriend.map((friend, index) => {
            return (
              <div key={index} className="flex items-center gap-5 bg-base-100 rounded-xl p-5 my-3">
                <div>
                  <BiSolidMessageDots className="mx-auto mb-1" />
                </div>
                <div>
                  <span className="text-xl font-bold">Text</span> <span>wiht</span> {friend.name}
                  <h2>{formattedDate}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {selectedVideoFriend.map((friend, index) => {
            return (
              <div key={index} className="flex items-center gap-5 bg-base-100 rounded-xl p-5 my-3">
                <div>
                  <IoVideocamOutline className="mx-auto mb-1" />
                </div>
                <div>
                  <span className="text-xl font-bold">Video</span> <span>wiht</span> {friend.name}
                  <h2>{formattedDate}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLInePage;

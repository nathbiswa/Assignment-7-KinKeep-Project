import React, { useState } from 'react';
import { FrinedContext } from './Context/Context';




const FreindContextProvider = ({children}) => {
     const [selectedFriend,setSelectedFriend] = useState([]);
     const [selectedMessageFriend, setSelectedMessageFriend] = useState([]);
     const [selectedVideoFriend, setSelectedVideoFriend] = useState([]);

const data = {
   selectedFriend,
   setSelectedFriend,
   selectedMessageFriend,
   setSelectedMessageFriend,
   selectedVideoFriend,
   setSelectedVideoFriend,
}

    return <FrinedContext.Provider value={data}>{children}</FrinedContext.Provider>;
};

export default FreindContextProvider;
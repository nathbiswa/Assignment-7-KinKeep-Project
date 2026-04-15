import React, { useEffect, useState } from 'react';

const useHooks = () => {
    const [friendData, setFriendData] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const friendDataPromise = async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
    
          setTimeout(() => {
            setFriendData(data);
            setLoading(false);
          }, 2000);
        };
        friendDataPromise();
      }, []);


    return {friendData, loading};
};

export default useHooks;
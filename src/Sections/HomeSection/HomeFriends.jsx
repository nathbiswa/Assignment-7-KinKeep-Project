import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const HomeFriends = () => {

    const [selectedFriend, setSelectedFriend] = useState([]);

    useEffect(()=>{

        const friendData = async ()=>{
            const res = await fetch("data.json");
            const data = await res.json();
            setSelectedFriend(data);
            // console.log(data, "All freinds list");
        };
        friendData();


    }, []);



    return (
        <div className='bg-[#E9E9E9]'>
          <div className='w-10/12 mx-auto '>
            <div className='py-4'>
                <h1 className='text-3xl font-bold p-2'>Your Friends</h1>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10'>
            {
                selectedFriend.map((item, index)=>{
                    return <Card key={index} item={item}></Card>
                })
            }
           </div>
        </div>  
        </div>
        
    );
};

export default HomeFriends;
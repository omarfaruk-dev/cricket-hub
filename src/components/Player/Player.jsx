import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, handleChoosePlayer }) => {
    const { name, country, role, batting_style, image_url, price } = player;

    const [playerBtn, setPlayerBtn] = useState(false);
    const handleBtnStatus = () => {
        setPlayerBtn(true);
        handleChoosePlayer(player);
    }

    return (
        <div className='border-2 border-gray-100 p-5 rounded-xl space-y-3'>
            <img className='rounded-xl' src={image_url} alt={name} />
            <div className='flex gap-4 items-center'>
                <FaUser size={25} />
                <h3 className='text-xl font-semibold'> {name}</h3>
            </div>
            <div className='flex justify-between border-b-2 border-gray-100 pb-5'>
                <span className='flex items-center gap-3'><FaFlag />{country}</span>
                <button className='btn hover:bg-gray-50 hover:no-shadow'>{role}</button>
            </div>
            <h3 className='font-semibold'>{batting_style}</h3>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Price: ${price}</h3>
                <button onClick={handleBtnStatus} disabled={playerBtn? true: false } className='btn bg-white hover:bg-[#E7FE29]'>{playerBtn?'Selected':'Choose Player'}</button>
                {/* <button onClick={()=>{ handleChoosePlayer(); handleBtnStatus}} className={playerBtn ? 'btn-disabled' : 'btn bg-white hover:bg-[#E7FE29]'}>Choose Player</button> */}
            </div>

        </div>
    );
};

export default Player;
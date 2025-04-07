import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className=' mt-6 flex justify-between items-center'>
                <img src="images/logo.svg" alt="" />
                <ul className='flex justify-between items-center gap-10 font-normal'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                    <button className='btn'><span>0</span> Coin <img src="images/coin.svg" alt="" /></button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
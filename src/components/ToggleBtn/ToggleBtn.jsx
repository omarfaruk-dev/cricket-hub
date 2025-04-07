import React from 'react';

const ToggleBtn = () => {
    return (
        <div className='flex justify-between items-center mt-20 mb-5'>
            <h2 className='text-2xl font-bold'>Available Players</h2>
            <div className="inline-flex rounded-xl border border-gray-300 overflow-hidden">
                <button type="button" className=" px-6 py-3 text-sm font-semibold transition-colors ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#E7FE29] bg-[#E7FE29] text-gray-600 hover:bg-gray-100 rounded-l-xl">Available
                </button>
                <button className="px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#E7FE29] bg-white text-black rounded-r-xl">Selected (0)</button>

            </div>
        </div>
    );
};

export default ToggleBtn;
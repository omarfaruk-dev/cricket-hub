import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const DisplayCart = ({ displayCart, handleDeleteBtn }) => {

    return (
        <div>
            {/* <h3>{displayCart.length}</h3> */}
            <div className='space-y-5 mb-10'>
                {
                    displayCart.map((cart) => <Cart handleDeleteBtn={handleDeleteBtn} key={cart.id} cart={cart}></Cart>)
                }
            </div>
            <button className='m-2 border-2 border-[#E7FE29] rounded-2xl mb-20'><a className='inline-block m-2 py-3.5 px-5  bg-[#E7FE29] font-bold rounded-xl' href="#">Add More Player</a></button>
        </div>
    );
};

const Cart = ({ cart, handleDeleteBtn }) => {
    
    return (
        <div className='flex justify-between items-center p-5 border rounded-xl border-gray-200'>
            <div className='flex gap-6 items-center'>
                <img className='w-20 h-20 object-cover rounded-lg' src={cart.image_url} />
                <div className='space-y-2'>
                    <h3 className='text-2xl font-semibold'>{cart.name}</h3>
                    <p className='text-[#13131360]'>{cart.batting_style}</p>
                </div>
            </div>
            <button onClick={()=>handleDeleteBtn(cart.id)}><RiDeleteBin6Line size={30} color='red' /></button>
        </div>
    )
};



export default DisplayCart;
export { Cart };
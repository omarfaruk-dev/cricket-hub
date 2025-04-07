import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({coinCount}) => {
    return (
        <div>
            <nav className=' mt-6 flex justify-between items-center px-5'>
                <img src="images/logo.svg" alt="" />
                <ul className='hidden md:flex justify-between items-center gap-10 font-normal'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                    <button className='btn py-4 px-5 rounded-xl bg-white'>{coinCount} Coin <img src="images/coin.svg" alt="" /></button>
                </ul>
                <span className="md:hidden"><HiMenuAlt3 size={25}/></span>
            </nav>
        </div>
    );
};

export default Navbar;
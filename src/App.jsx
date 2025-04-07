
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import ToggleBtn from './components/ToggleBtn/ToggleBtn'
import DisplayCart from './components/DisplayCart/DisplayCart'

const promisePlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
}

function App() {
  const resolvePlayers = promisePlayers();

  const [coinCount, setCoinCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [displayCart, setDisplayCart] = useState([]);

  const handleChoosePlayer = (player) => {
    setPlayerCount(previous => previous + 1);
    const newCart = [...displayCart, player];
    setDisplayCart(newCart);
  }

  const handleHeroBtn = () => {
    setCoinCount(previousCount => previousCount + 100000);
  };

  const handleDeleteBtn = (id) => {
    const remainingCart = displayCart.filter(car => car.id !== id);
    setDisplayCart(remainingCart);
  }


  return (
    <>
      <Navbar coinCount={coinCount}></Navbar>
      <Hero handleHeroBtn={handleHeroBtn}></Hero>
      <ToggleBtn playerCount={playerCount}></ToggleBtn>
      <Suspense fallback={
        <div className='text-center'>
          <span className="loading loading-infinity loading-xl text-warning"></span>
        </div>}>
        <DisplayCart displayCart={displayCart} handleDeleteBtn={handleDeleteBtn}></DisplayCart>
        <Players resolvePlayers={resolvePlayers} handleChoosePlayer={handleChoosePlayer}></Players>
      </Suspense>

    </>
  )
}

export default App

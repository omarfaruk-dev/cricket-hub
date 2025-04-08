import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Players from './components/Players/Players';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import DisplayCart from './components/DisplayCart/DisplayCart';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [players, setPlayers] = useState([]);
  const [coinCount, setCoinCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [displayCart, setDisplayCart] = useState([]);
  const [activeTab, setActiveTab] = useState("available");


  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.error("Failed to load players:", err));
  }, []);

  const handleChoosePlayer = (player) => {

    if (player.price >= coinCount) {
      toast.warn('Insufficient Balance!', {position:'top-center', autoClose: 2000, theme:"colored"})
    } else {
      setPlayerCount(previous => previous + 1);
      const newCart = [...displayCart, player];
      setDisplayCart(newCart);
    }
  };

  const handleHeroBtn = () => {
    setCoinCount(prev => prev + 100000);
    toast.success("Wow! You got 100000 coins",{position:"top-center",autoClose:2000, theme:"colored"})
  };

  const handleDeleteBtn = (id) => {
    const remainingCart = displayCart.filter(cart => cart.id !== id);
    setDisplayCart(remainingCart);
  };

  return (
    <>
      <Navbar coinCount={coinCount} />
      <Hero handleHeroBtn={handleHeroBtn} />
      <ToggleBtn playerCount={playerCount} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "selected" && (
        <DisplayCart displayCart={displayCart} handleDeleteBtn={handleDeleteBtn} />
      )}

      {activeTab === "available" && (
        <Players players={players} handleChoosePlayer={handleChoosePlayer} />)}
         <ToastContainer />
    </>
  );
}

export default App;

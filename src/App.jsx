import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Players from './components/Players/Players';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import DisplayCart from './components/DisplayCart/DisplayCart';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer/Footer';

function App() {
  const [players, setPlayers] = useState([]);
  const [coinCount, setCoinCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [displayCart, setDisplayCart] = useState([]);
  const [activeTab, setActiveTab] = useState("available");
  const [totalPriceCount, setTotalPriceCount] = useState(0);

  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.error("Failed to load players:", err));
  }, []);


  const handleTotalPrice = (price) => {
    setTotalPriceCount(totalPriceCount + price);
  }
  const handlePriceDec = (price) => {
    setTotalPriceCount(totalPriceCount - price);

  }
  // const handlePlayerDec = (players) => {
  //   console.log(players);
  // }



  // const handleChoosePlayer = (player) => {
  //   if (parseInt(player.price) <= coinCount) {
  //     alert('Added')
  //     setPlayerCount(previous => previous + 1);
  //     const newCart = [...displayCart, player];
  //     setDisplayCart(newCart);
      
  //     if (displayCart.length < 6) {
  //       const newCart = [...displayCart, player];
  //       setDisplayCart(newCart);
  //       setCoinCount(coinCount - player.price)

  //     } else {
  //       alert('Limit Reached')
  //     }
  //   } else {
  //     alert('Not available balance')
  //   }

  const handleChoosePlayer = (player) => {
    if (player.price >= coinCount && coinCount <= 0) {
      toast.warn('Insufficient Balance!', { position: 'top-center', autoClose: 2000, theme: "colored" })
    } else if (playerCount >= 6) {
      toast.warn('You have reached limit', { position: 'top-center', theme: 'colored', autoClose: 2000 })
    } else {
      setPlayerCount(previous => previous + 1);
      const newCart = [...displayCart, player];
      setDisplayCart(newCart);
      toast.success('One player added to your cart', { position: 'top-center', theme: 'colored', autoClose: 1500 })
    }
  };

  const handleHeroBtn = () => {
    setCoinCount(prev => prev + 300000);
    // toast.success("Wow! You got 100000 coins", { position: "top-center", autoClose: 2000, theme: "colored" })
  };

  const handleDeleteBtn = (id) => {
    const remainingCart = displayCart.filter(cart => cart.id !== id);
    setDisplayCart(remainingCart);
    // handlePlayerDec(players)
  };

  return (
    <>
      <Navbar coinCount={coinCount} totalPriceCount={totalPriceCount} />
      <Hero handleHeroBtn={handleHeroBtn} />
      <ToggleBtn playerCount={playerCount} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "selected" && (
        <DisplayCart
          displayCart={displayCart}
          handleDeleteBtn={handleDeleteBtn}
          players={players}
          playerCount={playerCount}
          totalPriceCount={totalPriceCount}
          handlePriceDec={handlePriceDec}
        />
      )}

      {activeTab === "available" && (
        <Players players={players} handleChoosePlayer={handleChoosePlayer} handleTotalPrice={handleTotalPrice} />)}
      <Footer></Footer>

      <ToastContainer />

    </>
  );
}

export default App;

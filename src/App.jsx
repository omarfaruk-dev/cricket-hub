
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import ToggleBtn from './components/ToggleBtn/ToggleBtn'

const promisePlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
}

function App() {
  const resolvePlayers = promisePlayers();

  const [coinCount, setCoinCount] = useState(0);
  const handleHeroBtn = () => {
    setCoinCount(previousCount => previousCount + 100000);
  };

  return (
    <>
      <Navbar coinCount={coinCount}></Navbar>
      <Hero handleHeroBtn={handleHeroBtn}></Hero>
      <ToggleBtn></ToggleBtn>
      <Suspense fallback={
        <div className='text-center'>
          <span className="loading loading-infinity loading-xl text-info"></span>
          <span className="loading loading-infinity loading-xl text-success"></span>
          <span className="loading loading-infinity loading-xl text-secondary"></span>
        </div>}>
        <Players resolvePlayers={resolvePlayers}></Players>
      </Suspense>

    </>
  )
}

export default App

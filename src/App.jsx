
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { DiVim } from 'react-icons/di'

const promisePlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
}

function App() {
  const resolvePlayers = promisePlayers();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
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

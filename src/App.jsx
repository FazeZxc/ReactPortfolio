import { useState } from 'react'
import { Navbar } from './scroll'
import { SideSq } from './scroll'
import MovingTexts from './movingTexts'

import './App.css'


function App() {

  return (
    <>
    <div className='h-screen w-screen bg-[url("assets/media/DSC07033.jpg")] bg-no-repeat bg-contain bg-center' >
    <Navbar></Navbar>
    <SideSq></SideSq>
    <MovingTexts></MovingTexts>
    </div>
    </>
  )
}

export default App

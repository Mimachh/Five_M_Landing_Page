'use client'
import { useSnapshot } from 'valtio'
import { AnimatePresence } from "framer-motion"
import About from "./components/about";
import Herosection from "./components/hero";


import state from "../utils/state"
import Nav from './components/Nav/Nav';


export default function Home() {
  const snap = useSnapshot(state);

  return (

   
    <section className='bg-dark text-light min-h-[200vh]'>  
      <Herosection state={snap.isHere}/>
      <About />
    </section>

  )
}

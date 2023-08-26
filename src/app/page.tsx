'use client'
import { useSnapshot } from 'valtio'
import { AnimatePresence } from "framer-motion"
import About from "@/components/about";
import Herosection from "@/components/hero";


import state from "../utils/state"




export default function Home() {
  const snap = useSnapshot(state);

  return (

   
    <section className='bg-dark text-light '>  
      <Herosection state={snap.isHere}/>
    
      <About />
    </section>

  )
}

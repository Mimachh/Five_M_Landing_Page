import { MouseEventHandler } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from "../utils/framer"
import { Button } from "@/components/ui/button"

import Modal from "@/components/modal"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface HeroProps {
  state: boolean;
}

const Herosection = ({ state }: HeroProps) => {


  return (
    <>

     
        <section className="h-[calc(90vh-64px)] border bg-dark">
            <div className="backgroundImage relative h-full w-full">
            <AnimatePresence>
            { state &&
              <div className="absolute inset-0 flex items-end pb-[8vh] md:pb-[0vh] md:items-center justify-center gap-[10px] md:gap-[5vh] md:pt-[40vh] px-4 md:px-8">
                {/* Bouton soutien */}
                <motion.div {...slideAnimation('left')}>
                  <Button size="xl" className="bg-primary border-primary text-light text-md md:text-lg">Soutenir</Button> 
                </motion.div>
                {/* Bouton inscription */}
                <motion.div {...slideAnimation('right')}>
                  <div className="gradient-perso p-[2px] rounded-lg">
                    <Modal />
                  </div>
                </motion.div>
              
              </div>
            }
            </AnimatePresence>
            </div>
            {/* <motion.div {...slideAnimation('up')}>
              image
            </motion.div>
            <motion.div {...slideAnimation('down')}>
              bouton
              <p className="text-transparent bg-clip-text gradient-perso">TECXd opjqsd qsd </p>
            </motion.div> */}
        </section>
      
     
    </>
  )
}

export default Herosection
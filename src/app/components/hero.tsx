import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from "../../utils/framer"
interface HeroProps {
  state: boolean;
}

const Herosection = ({ state }: HeroProps) => {
  return (
    <>
    <AnimatePresence>
      { state &&
        <div className="flex items-center justify-between">
          <div className="backgroundImage">
            <button>Pré inscription</button>
            <button>Soutenir</button>
          </div>
          <motion.div {...slideAnimation('up')}>
            image
          </motion.div>
          <motion.div {...slideAnimation('down')}>
            bouton
          </motion.div>
        </div>
      }
      </AnimatePresence>
    </>
  )
}

export default Herosection
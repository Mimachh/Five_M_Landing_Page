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
        <div>
          <motion.div {...slideAnimation('left')}>
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
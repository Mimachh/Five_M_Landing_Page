import { motion,MotionConfig } from "framer-motion";

import { mobileNavLinks, mobileBackdropMenu } from "../../../utils/framer"

interface MobileMenuProps {
    isLargeScreen: boolean;
    toggleMobileButton: () => void;
  }

const MobileMenu = ({ isLargeScreen, toggleMobileButton  }: MobileMenuProps) => {

  return (
    <MotionConfig transition={{
        type: "spring",
        bounce: 0.099
      }}>
        <motion.div 
          key="mobile-nav"
          variants={mobileBackdropMenu()}
          initial="closed"
          animate="open"
          exit="closed"
          className='fixed inset-0 bg-teal opacity-[0.85]'>
            <div className='h-full container mx-auto space-y-10 p-6 flex flex-col justify-center'>
              <motion.div
              variants={mobileNavLinks()}
              >
                  <ul className='space-y-5'>
                    <li>
                      <a onClick={() => toggleMobileButton()}  href="#about" className='text-5xl font-semibold text-light'>About</a>
                    </li>
                    <li>
                      <a href="" className='text-5xl font-semibold text-light'>Link 1</a>
                    </li>
                    <li>
                      <a href="" className='text-5xl font-semibold text-light'>Link 1</a>
                    </li>
                  </ul>
              </motion.div>
              <motion.div 
              variants={mobileNavLinks()}
              className='w-full bg-light h-px'></motion.div>
              <motion.ul
              variants={mobileNavLinks()}  
                className="list-none flex justify-center gap-x-4"
              >
                <li>
                  <div className="bg-light rounded-lg w-8 h-8"></div>
                </li>
                <li>
                  <div className="bg-light rounded-lg w-8 h-8"></div>
                </li>
                <li>
                  <div className="bg-light rounded-lg w-8 h-8"></div>
                </li>
              </motion.ul>
            </div>
        </motion.div>
      </MotionConfig>
  )
}

export default MobileMenu
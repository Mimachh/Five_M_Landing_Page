import React from 'react'
import { motion } from "framer-motion";
import { opacityWhenToggle, toggleMobileAppears, toggleMobileNavButton } from '@/utils/framer';

interface ToggleButtonProps {
    areWeLarge: boolean;
    mobileNav: boolean;
    toggleMobileButton: () => void;
  }


const ToggleButton = ({ areWeLarge, toggleMobileButton, mobileNav  }: ToggleButtonProps) => {
  return (
    <motion.div
    className={areWeLarge ? "hidden" : "block"}
    animate={areWeLarge ? "openDesktopLink" : "closeDesktopLink"}
    initial={areWeLarge ? "closeDesktopLink" : "openDesktopLink"}
    // exit="openDesktopLink"
    variants={toggleMobileAppears(1)}
    >
      {/* Toggle button */}
      <motion.button 
        animate={ mobileNav ? "open" : "closed"}
        onClick={() => toggleMobileButton()} 
        className="lg:hidden flex flex-col space-y-1">
          <motion.span 
          variants={toggleMobileNavButton(-45, 5)}
          className="w-5 h-px bg-light block"></motion.span>
          <motion.span 
          variants={opacityWhenToggle('closed', 'open')}
          className="w-5 h-px bg-light block"></motion.span>
          <motion.span 
          variants={toggleMobileNavButton(45, -5)}
          className="w-5 h-px bg-light block"></motion.span>
      </motion.button>
    </motion.div>
  )
}

export default ToggleButton
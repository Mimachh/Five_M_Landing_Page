'use client'

import React, { useState, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useSnapshot } from 'valtio'

import MobileMenu from './MobileMenu';
import { desktopNavLinks, opacityWhenToggle, toggleMobileAppears, toggleMobileNavButton } from "../../../utils/framer"
import state from '@/utils/state';

const Nav = () => {

  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  function toggleMobileButton() {
    toggleMobileNav();
    state.isHere = !state.isHere;
  }

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [areWeLarge, setAreWeLarge] = useState(isLargeScreen);
  console.log(areWeLarge)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const newIsLargeScreen = window.innerWidth > 1024;
        setIsLargeScreen(newIsLargeScreen);
        setAreWeLarge(newIsLargeScreen);
        toggleMobileNav(0);
        state.isHere = true;
      }
    };

    // Initial check
    handleResize();
    // Add window resize event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);


  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-primary">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center">
        <div className='w-full relative z-10 flex items-center justify-between'>
          <div>
            Logo
            {mobileNav}
          </div>
          <AnimatePresence>
          { !areWeLarge && (
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
          )}
          </AnimatePresence>
          <AnimatePresence>
            { areWeLarge &&
              <div className={areWeLarge ? "block" : "hidden"}>
                  <motion.div
                    initial={areWeLarge ? "closeDesktopLink" : "openDesktopLink"}
                    animate={areWeLarge ? "openDesktopLink" : "closeDesktopLink"}
                    // exit="closeDesktopLink"
                    variants={desktopNavLinks()}
                    className='w-full bg-light h-px'
                  >
                    Links
                    <motion.div>

                    </motion.div>
                  </motion.div>
              </div>
            }
          </AnimatePresence>
        </div>
      </div>
    <AnimatePresence>
      { mobileNav && 
        <MobileMenu isLargeScreen={isLargeScreen} />
      }
    </AnimatePresence>

    </nav>
  )
}

export default Nav;
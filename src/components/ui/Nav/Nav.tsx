'use client'

import React, { useState, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from "framer-motion";

import MobileMenu from './MobileMenu';
import { desktopNavLinks } from "@/utils/framer"
import state from '@/utils/state';
import ToggleButton from './ToggleButton';

const Nav = () => {

  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  function toggleMobileButton() {
    toggleMobileNav();
    state.isHere = !state.isHere;
  }

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [areWeLarge, setAreWeLarge] = useState(isLargeScreen);

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
    <nav className="z-50 sticky top-0 inset-x-0 h-16 bg-dark text-light">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center">
        <div className='w-full relative z-10 flex items-center justify-between'>
          <div>
            Logo
          </div>
          <AnimatePresence>
          { !areWeLarge && (
            <ToggleButton areWeLarge={areWeLarge} toggleMobileButton={toggleMobileButton} mobileNav={mobileNav} />
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
        <MobileMenu isLargeScreen={isLargeScreen} toggleMobileButton={toggleMobileButton}/>
      }
    </AnimatePresence>

    </nav>
  )
}

export default Nav;
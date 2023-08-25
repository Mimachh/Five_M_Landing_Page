export const desktopNavLinks = () => {
    
    return {
        openDesktopLink: {
            x: "0%",
            opacity: 1,
            transition: { duration: 0.8},
            
        },
        closeDesktopLink: {
            x: "75%",
            opacity: 0,
            // transition: { duration: 0.3},
          
        }
    }
}

export const mobileNavLinks = () => {
    return {
        open: {
            y: "0%",
            opacity: 1
        },
        closed: {
            y: "25%",
            opacity: 0
        }
    }
}

export const mobileBackdropMenu = () => {
    return {
        open: {
            x: "0%",
            transition: {
              type: "spring",
              bounce: 0.099,
              when: "beforeChildren"
            }
          },
          closed: {
            x: "-100%",
            transition: {
              type: "spring",
              bounce: 0.25,
              when: "afterChildren"
            }
          }
    }
}

export const toggleMobileNavButton = (rotateDirection, yDirection) => {
    return {
        closed: { rotate: 0, y: 0 },
        open: { rotate: rotateDirection, y: yDirection}
    }
}

export const toggleMobileAppears = (delay) => {
    return {
        openDesktopLink: {   
            x: "75%",
            opacity: 0,
            transition: { duration: 0.8},
        },
        
        closeDesktopLink: {
            x: "0%",
            opacity: 1,
            transition: { duration: 0.8},
        } 
    }
}

export const opacityWhenToggle = (closed, open) => {
    return {
        [closed]: { opacity: 1 },
        [open]: { opacity: 0}
    }
}


export const transition = { type: "spring", duration: 2 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};
export const hoverVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };


export const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.07 },
    tap: { scale: 0.95},
};

export const rotaiteR = {
  hidden: {
    opacity: 0,
    rotate: -3,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    },
  },
  visible: {
    opacity: 1,
    rotate: 3,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    },
  },
}

export const rotaiteL = {
  hidden: {
    opacity: 0,
    rotate: 3,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    },
  },
  visible: {
    opacity: 1,
    rotate: -3,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    },
  },
}

export const MoveTop = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { 
      duration: 0.6,
      ease: "easeInOut"
    },
  },
  visible: {
    opacity: 1,
    y: -40,
    transition: { 
      duration: 0.6,
      ease: "easeInOut"
    },
  },
};
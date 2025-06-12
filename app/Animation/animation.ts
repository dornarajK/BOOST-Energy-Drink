

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
  
  tap: { scale: 0.95 },
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


// * Boost.tsx

// rotate div
export const BayBoostCard = {

  hidden: {
    opacity: 0,
    rotate: -50,
    x: -100,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
  visible: {
    opacity: 0.8,
    rotate: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
}


//*  boost aineet one by one 

export const aineetOneByOneMain = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    }
  }

}
export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}


//* All Boost 



export const BoostTextTopBottom = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 9,
      ease: "easeOut"
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    },
  },
};
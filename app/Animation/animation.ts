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
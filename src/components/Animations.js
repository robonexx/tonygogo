export const img_container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1],
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const img_item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0, 1],
    scaleX: [-1, 1],
    transition: { duration: 0.4 },
  },
};

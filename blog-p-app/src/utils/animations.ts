// Animações reutilizáveis para impressionar recrutadores
export const fadeInUp = {
  hidden: { 
    y: 60, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    x: -60, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export const fadeInRight = {
  hidden: { 
    x: 60, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear" as const
  }
};

export const glowEffect = {
  boxShadow: [
    "0 0 20px rgba(126, 34, 206, 0.3)",
    "0 0 40px rgba(126, 34, 206, 0.6)",
    "0 0 20px rgba(126, 34, 206, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const typewriterEffect = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut" as const
    }
  }
};

export const magneticHover = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10
    }
  }
};

export const slideInFromBottom = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

export const morphingButton = {
  rest: {
    scale: 1,
    borderRadius: "8px"
  },
  hover: {
    scale: 1.05,
    borderRadius: "20px",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

export const liquidEffect = {
  hover: {
    scale: [1, 1.1, 1.05],
    rotate: [0, 5, -5, 0],
    borderRadius: ["8px", "20px", "8px"],
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const
    }
  }
};

export const particleFloat = {
  y: [0, -20, 0],
  x: [0, 10, -10, 0],
  rotate: [0, 180, 360],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};
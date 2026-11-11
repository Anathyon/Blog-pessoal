import { motion, type HTMLMotionProps } from 'framer-motion'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
}

/** Aparece suavemente ao entrar na tela (respeita "reduzir movimento" via MotionConfig). */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

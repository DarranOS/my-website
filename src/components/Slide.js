import { motion, AnimatePresence } from 'framer-motion'

export default function Slide({ children, isActive, direction = 1, distance = 200 }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: direction * (distance * -1) }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction * distance }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

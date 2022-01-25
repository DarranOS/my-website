import { motion, AnimatePresence } from 'framer-motion'

export default function FadeInUp({ children, isActive }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

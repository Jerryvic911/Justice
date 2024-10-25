'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const BoxTransition = () => {
  const router = useRouter()

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}

export default BoxTransition
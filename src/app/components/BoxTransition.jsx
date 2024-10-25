'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const BoxTransition = () => {
  const router = useRouter()

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ scaleY: 1 }} // Start scaled down
      animate={{ scaleY: 0}} // Scale up to full height when opening
      exit={{ scaleY: 1 }} // Scale down to zero when closing
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Keep the same transition for consistency
    />
  )
}

export default BoxTransition;

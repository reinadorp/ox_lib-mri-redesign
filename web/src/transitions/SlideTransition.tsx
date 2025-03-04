import { AnimatePresence, motion } from 'framer-motion';

const SlideTransition: React.FC<{ visible: boolean; children: React.ReactNode; onExitComplete?: () => void }> = ({
  visible,
  children,
  onExitComplete,
}) => {
  return (
      <AnimatePresence onExitComplete={onExitComplete}>
        {visible && (
          <motion.div
            initial={{ transform: 'translateX(100%)', opacity: 0 }}
            animate={{ transform: 'translateX(0%)', opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } }}
            exit={{ transform: 'translateX(100%)', opacity: 0, transition: { duration: 0.5, ease: [0.4, 0, 1, 1] } }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export default SlideTransition;

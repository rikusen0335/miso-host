import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type FadeInUpProps = {
  delay?: number;
  className?: string;
};

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  const customDelay = delay === 0 ? delay : delay / 1000;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: customDelay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};

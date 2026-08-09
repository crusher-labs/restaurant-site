import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
// The Button and useToast imports are no longer needed for this component as the button is removed.
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';

const AboutSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  // const { toast } = useToast(); // No longer needed
  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  return <section ref={setRefs} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">Est. 1961</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Honest, Simple,
              <br />
              Heartfelt, Delicious
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              At Saint-Laurent, we believe that true culinary artistry lies in simplicity and the finest ingredients.
              Established in 1961, our philosophy has always been to serve natural, healthy, and incredibly tasty dishes.
              Dine with us to experience a symphony of flavors, meticulously crafted with heart-felt honesty,
              turning every meal into a cherished memory. Our chefs are dedicated to creating an unforgettable journey for your palate,
              ensuring each visit is a celebration of exquisite cuisine and warm hospitality.
            </p>
            {/* The "View Menu" button has been removed */}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="hear grain relative grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border opacity-90">
              <span className="font-display px-6 text-center text-4xl text-foreground/80 sm:text-5xl">
                dal 1961
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
});
export default AboutSection;
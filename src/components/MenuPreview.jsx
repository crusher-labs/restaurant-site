import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
const MenuPreview = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const navigate = useNavigate();
  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  return <section ref={setRefs} className="py-24 bg-card">
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
        }} className="order-2 md:order-1">
            <div className="hear grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border">
              <span className="font-display px-6 text-center text-4xl italic text-foreground/70 sm:text-5xl">
                il menù
              </span>
            </div>
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
        }} className="order-1 md:order-2">
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Menu
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              A Fresh and
              <br />
              Seasonal Cuisine
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8">We serve only exceptional hand-picked ingredients, found fresh every morning at the local farmers' market.</p>
            <Button onClick={() => navigate('/menu')} className="bg-primary hover:bg-secondary text-foreground px-8">
              View Full Menu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
});
export default MenuPreview;
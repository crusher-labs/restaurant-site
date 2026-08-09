import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
const Footer = React.forwardRef((props, ref) => {
  const {
    toast
  } = useToast();
  const handleClick = () => {
    toast({
      title: "This functionality is not added yet, but you can add it with your next prompts ❤️"
    });
  };
  return <footer ref={ref} className="bg-card text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-light mb-4 tracking-wide">Address</h3>
            <address className="not-italic text-foreground/70 leading-relaxed">
            770 Scalinata di Trinita dei Monti<br />
              Rome, Italy 11472
            </address>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-light mb-4 tracking-wide">Opening Hours</h3>
            <div className="text-foreground/70 space-y-2">
              <p>Mon - Fri: 11am - 10pm</p>
              <p>Sat - Sun: 11am - 11pm</p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-light mb-4 tracking-wide">Contact Us</h3>
            <div className="text-foreground/70 space-y-2">
              <button onClick={handleClick} className="block hover:text-primary transition-colors">info@examplesite.com</button>
              <button onClick={handleClick} className="block hover:text-primary transition-colors">
                123-456-7890
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            © 2025 by San-Lorenzo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
});
export default Footer;
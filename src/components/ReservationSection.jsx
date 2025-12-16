import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ReservationSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    partySize: '2',
    date: new Date().toISOString().split('T')[0],
    time: '8:00 PM'
  });

  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Show the toast message for unimplemented functionality
    toast({
      title: "This functionality is not added yet, but you can add it with your next prompts",
    });

    // Original logic for storing reservations (now commented out/removed as per request)
    // if (!formData.partySize || !formData.date || !formData.time) {
    //   toast({
    //     title: "Please fill in all fields",
    //     variant: "destructive"
    //   });
    //   return;
    // }
    // const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    // const newReservation = {
    //   id: Date.now(),
    //   ...formData,
    //   createdAt: new Date().toISOString()
    // };
    // reservations.push(newReservation);
    // localStorage.setItem('reservations', JSON.stringify(reservations));
    // toast({
    //   title: "Reservation Submitted! ✨",
    //   description: `Table for ${formData.partySize} on ${formData.date} at ${formData.time}`
    // });
    // setFormData({
    //   partySize: '2',
    //   date: '',
    //   time: '8:00 PM'
    // });
  };

  return (
    <section ref={setRefs} className="py-24 bg-[#F5F1EB]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-[#6B5D4F] mb-4">
            Reserve a Table
          </h2>
          <p className="text-[#6B5D4F]/70">Enter your details and we'll get you the best seats for an unforgettable evening</p>
        </motion.div>

        <motion.form initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label htmlFor="partySize" className="text-[#6B5D4F] mb-2 block">
                Party size
              </Label>
              <Select value={formData.partySize} onValueChange={value => setFormData({
              ...formData,
              partySize: value
            })}>
                <SelectTrigger className="w-full border-[#E8E0D5] focus:border-[#8B7355]">
                  <SelectValue placeholder="2 guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <SelectItem key={num} value={`${num}`}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date" className="text-[#6B5D4F] mb-2 block">
                Date
              </Label>
              <input type="date" id="date" value={formData.date} onChange={e => setFormData({
              ...formData,
              date: e.target.value
            })} min={new Date().toISOString().split('T')[0]} className="w-full px-3 py-2 border border-[#E8E0D5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent" />
            </div>

            <div>
              <Label htmlFor="time" className="text-[#6B5D4F] mb-2 block">
                Time
              </Label>
              <Select value={formData.time} onValueChange={value => setFormData({
              ...formData,
              time: value
            })}>
                <SelectTrigger className="w-full border-[#E8E0D5] focus:border-[#8B7355]">
                  <SelectValue placeholder="8:00 PM" />
                </SelectTrigger>
                <SelectContent>
                  {['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'].map(time => <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#8B7355] hover:bg-[#6B5D4F] text-white py-6 text-lg">
            Find a Table
          </Button>
        </motion.form>
      </div>
    </section>
  );
});

export default ReservationSection;
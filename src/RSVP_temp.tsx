import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  attending: string;
  guests: string;
  message: string;
};

export function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      attending: 'yes'
    }
  });

  const attendingValue = watch('attending');

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    // In a real application, you would send this to your backend here.
  };

  return (
    <section className="py-24 md:py-40 relative">
      <div className="max-w-xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="bg-transparent"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl italic text-[#2C2A28] mb-6">
              Will you join us?
            </h2>
            <p className="font-sans text-xs md:text-sm font-light text-[#2C2A28]/50 uppercase tracking-[0.2em]">
              Please respond by August 1st
            </p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <h3 className="font-serif text-3xl italic text-[#C5A880] mb-6">Thank You!</h3>
              <p className="font-sans font-light text-[#2C2A28]/80 leading-relaxed">
                Your response has been carefully noted.<br />
                We can't wait to celebrate with you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 max-w-md mx-auto">
              {/* Name Input */}
              <div className="relative group">
                <input
                  {...register("name", { required: "Please enter your name" })}
                  type="text"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-[#2C2A28]/20 py-3 text-lg font-serif text-[#2C2A28] focus:outline-none focus:border-[#C5A880] transition-colors peer"
                />
                <label className="absolute left-0 top-3 text-[#2C2A28]/40 font-serif italic text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C5A880] peer-focus:not-italic peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:not-italic pointer-events-none">
                  Your Full Name
                </label>
                {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-400 font-sans">{errors.name.message}</span>}
              </div>

              {/* Attendance Radios */}
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex flex-col gap-4">
                  <label className="relative flex items-center gap-4 cursor-pointer group">
                    <input 
                      type="radio" 
                      value="yes" 
                      {...register("attending")}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border border-[#2C2A28]/30 peer-checked:border-[#C5A880] flex items-center justify-center transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880] scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                    <span className="font-serif text-lg text-[#2C2A28]/80 peer-checked:text-[#C5A880] transition-colors">Joyfully Accept</span>
                  </label>
                  
                  <label className="relative flex items-center gap-4 cursor-pointer group">
                    <input 
                      type="radio" 
                      value="no" 
                      {...register("attending")}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border border-[#2C2A28]/30 peer-checked:border-[#C5A880] flex items-center justify-center transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880] scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                    <span className="font-serif text-lg text-[#2C2A28]/80 peer-checked:text-[#C5A880] transition-colors">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {/* Conditional Guests Input */}
              <motion.div 
                initial={false}
                animate={{ 
                  height: attendingValue === 'yes' ? 'auto' : 0, 
                  opacity: attendingValue === 'yes' ? 1 : 0,
                  marginTop: attendingValue === 'yes' ? 48 : 0
                }}
                className="overflow-hidden relative group"
              >
                <input
                  {...register("guests")}
                  type="number"
                  min="0"
                  max="5"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-[#2C2A28]/20 py-3 text-lg font-serif text-[#2C2A28] focus:outline-none focus:border-[#C5A880] transition-colors peer"
                />
                <label className="absolute left-0 top-3 text-[#2C2A28]/40 font-serif italic text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C5A880] peer-focus:not-italic peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:not-italic pointer-events-none">
                  Additional Guests (+1, children)
                </label>
              </motion.div>

              {/* Message Input */}
              <div className="relative group pt-4">
                <textarea
                  {...register("message")}
                  placeholder=" "
                  rows={2}
                  className="w-full bg-transparent border-b border-[#2C2A28]/20 py-3 text-lg font-serif text-[#2C2A28] focus:outline-none focus:border-[#C5A880] transition-colors resize-none peer"
                />
                <label className="absolute left-0 top-3 text-[#2C2A28]/40 font-serif italic text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C5A880] peer-focus:not-italic peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:not-italic pointer-events-none">
                  A note or dietary request
                </label>
              </div>

              <div className="pt-12 text-center">
                <button
                  type="submit"
                  className="relative overflow-hidden group px-16 py-4 border border-[#2C2A28]/30 text-[#2C2A28]/80 uppercase tracking-[0.2em] font-sans text-xs font-light transition-colors hover:border-[#C5A880] hover:text-[#C5A880]"
                >
                  <span className="relative z-10">Send Reply</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

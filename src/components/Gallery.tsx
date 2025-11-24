import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import mockup1 from "@/assets/app-mockup-1.jpg";
import mockup2 from "@/assets/app-mockup-2.jpg";
import mockup3 from "@/assets/app-mockup-3.jpg";

const screenshots = [
  { src: mockup1, alt: "AI Species Identification Screen" },
  { src: mockup2, alt: "Interactive Wildlife Map" },
  { src: mockup3, alt: "Real-Time Insights Dashboard" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-accent/10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            App Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Experience WildTrace
            <br />
            <span className="text-gradient">In Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex items-end justify-center pb-8"
                  >
                    <span className="text-white font-medium text-lg">
                      {screenshot.alt}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to start your wildlife adventure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download for iOS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border-2 font-semibold hover:bg-accent transition-all duration-300"
            >
              Download for Android
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
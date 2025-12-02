import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Cpu, Info, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "Take a photo of any wildlife you encounter",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our neural network processes and identifies the species",
  },
  {
    icon: Info,
    title: "Discover",
    description: "Get detailed info, location data, and conservation insights",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simple, Fast, and
            <br />
            <span className="text-gradient">Incredibly Powerful</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <div className="glass rounded-3xl p-8 text-center relative bg-background/50">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 border-2 border-primary/20"
                    >
                      <step.icon className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                      className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                    >
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            How WildTrace Stands Out
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            While there are several wildlife tracking apps on the market, we noticed 
            that none successfully combined all the features we envisioned. Most 
            existing apps lacked appeal for new users and didn’t leverage modern AI 
            technology effectively.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            WildTrace aims to fill that gap by integrating AI-powered species 
            identification, real-time wildlife data, interactive maps, and contextual 
            information from trusted sources like Wikipedia. Our approach focuses on 
            user-friendly design, engaging features, and accurate insights to make 
            wildlife tracking both accessible and exciting for beginners and experts alike.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;

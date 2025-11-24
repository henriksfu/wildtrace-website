import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Map, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Species Identification",
    description: "Our advanced neural networks instantly recognize over 50,000 species with 98% accuracy. Just point, shoot, and learn.",
  },
  {
    icon: Map,
    title: "Interactive Map Tracking",
    description: "Every sighting is mapped and shared with the community. Discover wildlife hotspots and plan your next adventure.",
  },
  {
    icon: Zap,
    title: "Real-Time Nature Insights",
    description: "Get instant behavioral patterns, habitat info, and conservation status. Connect deeper with the natural world.",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Explore Wildlife</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-3xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
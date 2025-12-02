import { motion } from "framer-motion";
import { useState } from "react";
import ContributionsModal from "./ContributionsModal"; // keep this

const Gallery = () => {
  const [isContributionsOpen, setContributionsOpen] = useState(false);

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Wildlife Adventure
            <br />
            <span className="text-gradient">With WildTrace</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Download the app, explore the architecture, or see team contributions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Download */}
            <a href="/WildTrace.apk" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download for Android
              </motion.button>
            </a>

            {/* MVVM PDF */}
            <a
              href="https://github.com/henriksfu/WildTrace/blob/main/WildTrace/Docs/MVVM.pdf?raw=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                MVVM
              </motion.button>
            </a>

            {/* Threads Structure PDF */}
            <a
              href="https://github.com/henriksfu/WildTrace/blob/main/WildTrace/Docs/Threads%20Diagram.pdf?raw=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Threads Structure
              </motion.button>
            </a>

            {/* Contributions Modal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setContributionsOpen(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contributions
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contributions Modal */}
      <ContributionsModal
        isOpen={isContributionsOpen}
        onClose={() => setContributionsOpen(false)}
      />
    </section>
  );
};

export default Gallery;

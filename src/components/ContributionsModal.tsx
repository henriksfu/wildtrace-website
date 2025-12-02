import { motion } from "framer-motion";

interface ContributionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContributionsModal: React.FC<ContributionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-3xl w-full shadow-lg overflow-y-auto max-h-[80vh]"
      >
        <h2 className="text-2xl font-bold mb-4">Contributions</h2>
        <div className="space-y-6 text-gray-800 dark:text-gray-200 text-sm">
          <div>
            <strong>Kavi Godden (Backend & Database Lead)</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Implemented account creation and login functionality using Firebase authentication.</li>
              <li>Implemented creating and retrieving database entries using Firebase database.</li>
              <li>Implemented storing and retrieving photos using Firebase storage.</li>
              <li>Created all code sections managing image creation and sightings.</li>
              <li>All code which accesses any server-side information or functionality was handled by Kavi.</li>
            </ul>
          </div>

          <div>
            <strong>Henrik Sachdeva (API & Architechture Lead)</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Designed MVVM and API consumption architecture with robust thread design.</li>
              <li>Integrated the Vision AI service to enable automatic image classification of user-uploaded sighting photos.</li>
              <li>Implemented Wikipedia API to fetch and display rich, contextual information about identified species on the Sighting Detail screen.</li>
              <li>Designed and developed the accompanying WildTrace Website/Web Platform.</li>
            </ul>
          </div>

          <div>
            <strong>Reid Lockhart (User & UI/UX Lead)</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Created virtually all user interface screens and graphics.</li>
              <li>Connected backend to frontend, wiring together features like database/map interaction.</li>
              <li>Extensive bug fixing for all features.</li>
              <li>Controlled data flow, data integrity, and shared state/observation throughout the app.</li>
            </ul>
          </div>

          <div>
            <strong>Steven Gong (Maps & Sighting Flow Lead)</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Implemented map viewing functionality using Google Maps API.</li>
              <li>Added marker functionality through Google Maps API allowing users to see sighting information.</li>
              <li>Created a view to allow users to save animal sightings and add any additional information.</li>
              <li>Added robust permission checks.</li>
              <li>Edited and uploaded presentation videos.</li>
            </ul>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-primary text-white rounded-full shadow hover:shadow-xl transition-all duration-300"
        >
          Close
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContributionsModal;

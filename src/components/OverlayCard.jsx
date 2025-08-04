import "../index.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const OverlayCard = ({ image, title, description }) => {
  return (
    <div className="card text-center w-64">
      {/* Only the image will rotate */}
      <motion.div
        animate={{
          rotate: [0, -2, 2, 0], // Subtle rotation cycle
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
        }}
      >
        <img
          src={image}
          alt={title}
          className="card-image w-52 h-52 mx-auto mb-4 object-contain"
        />
      </motion.div>

      {/* Text remains static */}
      <h3 className="card-title text-xl text-black font-bold mb-2">{title}</h3>
      <p className="card-description text-sm text-gray-600">{description}</p>
    </div>
  );
};

OverlayCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OverlayCard;

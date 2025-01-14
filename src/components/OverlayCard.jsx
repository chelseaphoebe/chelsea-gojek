import "../index.css"; 
import PropTypes from "prop-types";

const OverlayCard = ({ image, title, description }) => {
  return (
    <div className="card text-center w-64">
      <img
        src={image}
        alt={title}
        className="card-image w-52 h-52 mx-auto mb-4 object-contain"
      />
      <h3 className="card-title text-xl text-black font-bold mb-2">
        {title}
      </h3>
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

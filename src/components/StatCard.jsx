import PropTypes from "prop-types";
import "../index.css";

const StatCard = ({ image, title, description, bgColor }) => {
  return (
    <div
      className="relative w-[260px] h-[360px] rounded-[40px] text-black flex flex-col justify-end p-6"
      style={{
        backgroundColor: bgColor,
        boxShadow: `0 8px 24px 0 ${bgColor}`,
      }}
    >
      <div className="absolute -top-16 left-0 w-full flex justify-center">
        <img src={image} alt={title} className="w-[280px] object-contain" />
      </div>

      <div className="text-left mb-8 ml-2 mt-auto">
        <h3 className="text-5xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired, 
};

export default StatCard;

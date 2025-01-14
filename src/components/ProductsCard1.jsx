import PropTypes from "prop-types";
import "../index.css";

const ProductsCard1 = ({ image, title, bgColor, bgColor1, description }) => {
  return (
    <div
      className="w-[275px] h-[420px] rounded-[28px] relative overflow-hidden"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div
        className="absolute inset-0 bg-white opacity-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
        }}
      ></div>

      <div
        className="w-[275px] h-[300px] rounded-[36px] flex justify-center items-center relative"
        style={{
          backgroundColor: bgColor1,
        }}
      >
        <img
          src={image}
          alt={title}
          className="rounded-[36px] w-64 h-64 object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center pt-2 text-white gap-2 mx-4 mb-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <h2 className="text-sm">{description}</h2>
      </div>
    </div>
  );
};

ProductsCard1.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  bgColor1: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductsCard1;

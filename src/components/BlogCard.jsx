import PropTypes from "prop-types";
import "../index.css";

const BlogCard = ({ imageUrl, title, description, link }) => {
  return (
    <a
      href={link}
    //   target="_blank"
      rel="noreferrer"
      className="max-w-[350px] rounded-lg flex flex-col justify-between items-center mb-5"
    >
      <img
        src={imageUrl}
        className="w-[350px] h-[200px] object-cover object-center rounded-xl"
        alt={title}
      />
      <div className="flex flex-col gap-3 m-2 mt-6">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-normal text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;

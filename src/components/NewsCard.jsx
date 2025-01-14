import PropTypes from "prop-types";

export const NewsCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="max-w-[400px] rounded-lg flex flex-col justify-between items-center mb-5">
      <img
        src={imageUrl || "/images/placeholder.png"}
        className="w-full h-[200px] object-cover object-center rounded-xl"
        alt={title || "News image"}
        loading="lazy"
      />
      <div className="flex flex-col gap-3 m-2 mt-6">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-normal text-sm text-gray-600">
          {description || "No description available."}
        </p>
        <a
          className="font-bold uppercase text-sm text-blue-500"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Baca selengkapnya
        </a>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

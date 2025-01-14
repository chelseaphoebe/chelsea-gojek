import "../assets/images/products.png";
import "../assets/images/prod1.png";
import ProductsCard1 from "../components/ProductsCard1";

const productsCard1Data = [
  {
    image: "./src/assets/images/prod2.png",
    bgColor: "#3D8A2D",
    bgColor1: "#4CA734",
    title: "Transport & Logistics",
    description: "We've kinda done 13,000 trips between earth and the moon.",
  },
  {
    image: "./src/assets/images/prod2.png",
    bgColor: "#4091AF",
    bgColor1: "#4EABD2",
    title: "Payments",
    description:
      "From deals to donations, we make transactions easy, reliable, and cashless.",
  },
  {
    image: "./src/assets/images/prod2.png",
    title: "Food & Shopping",
    bgColor: "#A13434",
    bgColor1: "#DB3E3F",
    description:
      "Fill your cart with food, electronics, medicines, and more. Without stepping out!",
  },
  {
    image: "./src/assets/images/prod2.png",
    title: "Business",
    bgColor: "#762D69",
    bgColor1: "#88398A",
    description:
      "Manage your restaurants, run ads, create promos, and do more.",
  },
];

const Careers = () => {
  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat min-h-screen flex items-center justify-center text-center px-4 md:px-52"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/src/assets/images/products.png')`,
        }}
      >
        <p className="text-white text-4xl sm:text-5xl font-semibold tracking-wide banner-text">
          We build products that nations run on
        </p>
      </div>

      <div className="bg-gray-900 pt-16 pb-8 pl-16 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsCard1Data.map((data, index) => (
            <ProductsCard1 key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Careers;

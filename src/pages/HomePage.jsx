import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OverlayCard from "../components/OverlayCard";
import StatCard from "../components/StatCard";
import "/assets/images/homepage1.jpg";
import "../index.css";

const statCardData = [
  {
    image: "/assets/images/stat1.png",
    title: "190 million+",
    description: "app downloads since 2015",
    bgColor: "#7CCC6C",
  },
  {
    image: "/assets/images/stat2.png",
    title: "2 million+",
    description: "driver partners",
    bgColor: "#D48BC8",
  },
  {
    image: "/assets/images/stat3.png",
    title: "900,000+",
    description: "GoFood merchants",
    bgColor: "#FFAE62",
  },
  {
    image: "/assets/images/stat4.png",
    title: "2.448x",
    description: "jump in downloads from 2015 to 2020",
    bgColor: "#4AC9E3",
  },
];

const overlayCardData = [
  {
    image: "/assets/images/1.png",
    title: "Fortune’s favorite",
    description:
      "Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.",
  },
  {
    image: "/assets/images/2.png",
    title: "$7.1 b contribution",
    description: "Value added to the Indonesian economy in 2019.",
  },
  {
    image: "/assets/images/3.png",
    title: "Tonne times greener",
    description: "Saved 11.3 tonnes of plastic in cutlery since October 2020.",
  },
  {
    image: "/assets/images/4.png",
    title: "Digitising merchants",
    description:
      "Resulted in 80% growth in number of GoFood merchants during pandemic.",
  },
];
const HomePage = () => {
  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat min-h-screen md:px-52 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/homepage1.jpg')`,
        }}
      >
        <p className="text-white text-xl md:text-3xl lg:text-5xl px-6 lg:px-0 font-semibold text-center tracking-wide banner-text">
          3 countries. 20+ products. 1 leading on-demand platform.
        </p>
      </div>

      <div className="bg-gray-900 text-white text-center py-12 relative">
        <h1 className="text-2xl md:text-5xl font-bold mb-6 px-8 md:px-0">
          We’re Gojek, the drivers of change
        </h1>
        <a
          href="/Careers"
          className="text-white px-6 py-3 rounded-3xl font-medium hover:bg-green-600 transition"
          style={{ backgroundColor: "rgb(0, 136, 13)" }}
        >
          Explore Careers
        </a>

        <div className="bg-white rounded-t-[100px] mt-20 h-[260px] relative z-10 px-4 lg:px-12">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="lg:hidden w-full"
            >
              {overlayCardData.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <OverlayCard {...data} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="hidden px-24 lg:grid grid-cols-4 gap-8">
              {overlayCardData.map((data, index) => (
                <OverlayCard key={index} {...data} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white text-black h-auto text-center px-12 md:px-0 py-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            We scale like a dream
          </h1>
          <a
            href="/Careers"
            className="text-white px-6 py-3 rounded-3xl font-medium hover:bg-green-600 transition"
            style={{ backgroundColor: "rgb(0, 136, 13)" }}
          >
            Scale with us
          </a>

          <div className="mt-32 flex justify-center gap-24 lg:gap-8 px-6 flex-wrap">
            {statCardData.map((data, index) => (
              <StatCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

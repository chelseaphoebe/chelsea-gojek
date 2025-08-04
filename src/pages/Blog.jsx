import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { NewsCard } from "../components/NewsCard";

const Blog = () => {
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c6c8db1d6e114390bf336f0f13312dc7`
      );
      const validNews = response.data.articles.filter((article) => {
        return (
          article.urlToImage &&
          article.title &&
          article.description &&
          article.url
        );
      });
      setNews(validNews.slice(0, 10));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchWeather = async (city) => {
    const weatherApiKey = "87b63a55d2a83c6c0dd63ce8085fb648";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
      );
      setWeather(response.data);
      setWeatherIcon(response.data.weather[0].icon);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchWeather("Jakarta");
  }, []);

  // Fungsi untuk menentukan gaya berdasarkan kondisi cuaca
  const getWeatherStyles = (weatherMain, iconCode) => {
    const styles = {
      bgClass: "bg-gray-900 border",
      iconSize: "w-24 h-24",
      iconUrl: `http://openweathermap.org/img/wn/${iconCode}@4x.png`,
      accentColor: "text-white",
      detailBg: "bg-gray-800 bg-opacity-80",
    };

    switch (weatherMain.toLowerCase()) {
      case "clear":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900 border-yellow-600";
        styles.accentColor = "text-yellow-300";
        styles.detailBg = "bg-yellow-900 bg-opacity-40";
        break;
      case "clouds":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 border-gray-500";
        styles.accentColor = "text-gray-200";
        styles.detailBg = "bg-gray-700 bg-opacity-40";
        break;
      case "rain":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 border-blue-500";
        styles.accentColor = "text-blue-300";
        styles.detailBg = "bg-blue-900 bg-opacity-40";
        break;
      case "thunderstorm":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 border-purple-500";
        styles.accentColor = "text-purple-300";
        styles.detailBg = "bg-purple-900 bg-opacity-40";
        break;
      case "snow":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-blue-700 to-gray-900 border-blue-300";
        styles.accentColor = "text-blue-200";
        styles.detailBg = "bg-blue-800 bg-opacity-40";
        styles.iconSize = "w-28 h-28";
        break;
      case "mist":
      case "fog":
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-400";
        styles.accentColor = "text-gray-300";
        styles.detailBg = "bg-gray-700 bg-opacity-40";
        break;
      default:
        styles.bgClass =
          "bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 border-green-500";
        styles.accentColor = "text-green-300";
        styles.detailBg = "bg-green-900 bg-opacity-40";
    }

    return styles;
  };

  // Komponen untuk detail cuaca
  const WeatherDetailCard = ({ title, value, bgClass }) => (
    <div
      className={`${bgClass} backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-300 hover:bg-opacity-60`}
    >
      <p className="font-semibold text-sm sm:text-base text-gray-300">
        {title}
      </p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );

  return (
    <>
      <div className="bg-gray-900 h-24"></div>
      <div className="bg-center bg-cover bg-no-repeat min-h-screen flex flex-col items-center pt-10 px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-4xl text-center">
          <p className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            What's on Gojek?
          </p>
          <p className="text-gray-900 pt-4 pb-6 text-base sm:text-lg md:text-xl tracking-wide">
            Our stories, latest updates, and exclusive promos. Find anything you
            want to know about us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl py-8">
          <BlogCard
            imageUrl="/src/assets/images/blog1.png"
            title="Promo MAKSIMAL GoFood: Diskon Makan Siang & Malam + Flash Sale Tiga Kali Sehari!"
            description="Gofood / 09 Jan 2025"
            link="https://www.gojek.com/blog/gofood/promo-maksimal-gofood-menu-diskon-50-persen"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog2.png"
            title="Makin hemat pakai GoRide Hemat di GoTransit"
            description="Gotransit / 06 Jan 2025"
            link="https://www.gojek.com/blog/gotransit/goridehemat-gotransit"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog3.png"
            title="Ada yang baruu! Saatnya belanja apa aja di Website GoMart"
            description="Gomart / 03 Jan 2025"
            link="https://www.gojek.com/blog/gomart/belanja-gomart-lewat-desktop"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog4.png"
            title="Mau jalan-jalan ke Singapura Bareng Besties?"
            description="Gojek / 26 Dec 2024"
            link="https://www.gojek.com/blog/gojek/ke-singapura-bareng-teman"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog5.png"
            title="Eksplor Singapura Bareng Keluarga!"
            description="Gojek / 26 Dec 2024"
            link="https://www.gojek.com/blog/gojek/ke-singapura-bareng-keluarga"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog6.png"
            title="Flash Sale Spesial Gajian Desember di GoFood, Hemat s.d 50% untuk Menu Favorit!"
            description="Gofood / 25 Dec 2024"
            link="https://www.gojek.com/blog/gofood/flash-sale-gajian-desember-menu-diskon-50-persen"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog7.png"
            title="LOMBA MAKAN Akhir Tahun Dapet Iphone 15 Pro & Emas"
            description="Gofood / 19 Dec 2024"
            link="https://www.gojek.com/blog/gofood/lomba-makan-dari-gofood"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog8.png"
            title="Pilihan Tepat untuk Liburan yang Tak Terlupakan Bareng Gojek dan Archipelago Hotels!"
            description="Gojek / 17 Dec 2024"
            link="https://www.gojek.com/blog/gojek/yuklibur-gojek-archipelago"
          />
          <BlogCard
            imageUrl="/src/assets/images/blog9.png"
            title="Pakai GoRide dan beli tiket Commuterline bisa sekaligus pakai GoTransit"
            description="Gotransit / 17 Dec 2024"
            link="https://www.gojek.com/blog/gotransit/goride-transit"
          />
        </div>

        {weather && weatherIcon && (
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl mb-10 border border-gray-700">
            <div
              className={`${
                getWeatherStyles(weather.weather[0].main, weatherIcon).bgClass
              } p-6 border-t-0`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="mr-4">
                    <img
                      src={
                        getWeatherStyles(weather.weather[0].main, weatherIcon)
                          .iconUrl
                      }
                      alt={weather.weather[0].description}
                      className={`${
                        getWeatherStyles(weather.weather[0].main, weatherIcon)
                          .iconSize
                      } drop-shadow-lg`}
                    />
                  </div>
                  <div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-1 ${
                        getWeatherStyles(weather.weather[0].main, weatherIcon)
                          .accentColor
                      }`}
                    >
                      Current Weather in {weather.name}
                    </h2>
                    <p
                      className={`text-5xl font-bold mb-2 ${
                        getWeatherStyles(weather.weather[0].main, weatherIcon)
                          .accentColor
                      }`}
                    >
                      {Math.round(weather.main.temp)}°C
                    </p>
                    {/* <p
                      className={`text-xl capitalize px-3 py-1 rounded-full inline-block ${
                        getWeatherStyles(weather.weather[0].main, weatherIcon)
                          .detailBg
                      }`}
                    >
                      {weather.weather[0].description}
                    </p> */}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <WeatherDetailCard
                    title="Feels Like"
                    value={`${Math.round(weather.main.feels_like)}°C`}
                    bgClass={
                      getWeatherStyles(weather.weather[0].main, weatherIcon)
                        .detailBg
                    }
                  />
                  <WeatherDetailCard
                    title="Humidity"
                    value={`${weather.main.humidity}%`}
                    bgClass={
                      getWeatherStyles(weather.weather[0].main, weatherIcon)
                        .detailBg
                    }
                  />
                  <WeatherDetailCard
                    title="Wind"
                    value={`${weather.wind.speed} m/s`}
                    bgClass={
                      getWeatherStyles(weather.weather[0].main, weatherIcon)
                        .detailBg
                    }
                  />
                  <WeatherDetailCard
                    title="Pressure"
                    value={`${weather.main.pressure} hPa`}
                    bgClass={
                      getWeatherStyles(weather.weather[0].main, weatherIcon)
                        .detailBg
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          id="section3"
          className="flex flex-col md:flex-row w-full max-w-6xl"
        >
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto my-10 md:px-10">
              {news.map((data, index) => (
                <NewsCard
                  key={index}
                  imageUrl={data.urlToImage}
                  title={data.title}
                  description={data.description}
                  link={data.url}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/3 order-first md:order-none md:h-screen top-0 md:sticky relative bg-[url('/src/assets/images/bgNews.png')] bg-cover bg-blend-darken flex justify-center items-center flex-col">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-white text-3xl font-bold drop-shadow-md text-center my-2 mx-12 md:px-0">
                News
              </h1>
              <p className="text-white text-lg font-normal drop-shadow-md mx-10">
                Our stories, latest updates, and exclusive promos. Find anything
                you want to know about us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

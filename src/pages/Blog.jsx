import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { NewsCard } from "../components/NewsCard";

// Import all images
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";
import blog5 from "../assets/images/blog5.png";
import blog6 from "../assets/images/blog6.png";
import blog7 from "../assets/images/blog7.png";
import blog8 from "../assets/images/blog8.png";
import blog9 from "../assets/images/blog9.png";
import bgNews from "../assets/images/bgNews.png";

const Blog = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c6c8db1d6e114390bf336f0f13312dc7`
      );
      setNews(response.data.articles.slice(0, 10));
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

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className="bg-gray-900 h-24"></div>
      <div className="bg-center bg-cover bg-no-repeat min-h-screen flex flex-col items-center pt-10 px-12 md:px-0">
        <div className="w-full sm:w-4/5 lg:w-2/3 text-center">
          <p className="text-gray-900 text-4xl sm:text-5xl font-bold tracking-wide">
            What's on Gojek?
          </p>
          <p className="text-gray-900 pt-4 pb-6 text-lg sm:text-xl tracking-wide">
            Our stories, latest updates, and exclusive promos. Find anything you
            want to know about us.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-8 pb-12 w-full">
          <BlogCard
            imageUrl={blog1}
            title="Promo MAKSIMAL GoFood: Diskon Makan Siang & Malam + Flash Sale Tiga Kali Sehari!"
            description="Gofood / 09 Jan 2025"
            link="https://www.gojek.com/blog/gofood/promo-maksimal-gofood-menu-diskon-50-persen"
          />
          <BlogCard
            imageUrl={blog2}
            title="Makin hemat pakai GoRide Hemat di GoTransit"
            description="Gotransit / 06 Jan 2025"
            link="https://www.gojek.com/blog/gotransit/goridehemat-gotransit"
          />
          <BlogCard
            imageUrl={blog3}
            title="Ada yang baruu! Saatnya belanja apa aja di Website GoMart"
            description="Gomart / 03 Jan 2025"
            link="https://www.gojek.com/blog/gomart/belanja-gomart-lewat-desktop"
          />
          <BlogCard
            imageUrl={blog4}
            title="Mau jalan-jalan ke Singapura Bareng Besties?"
            description="Gojek / 26 Dec 2024"
            link="https://www.gojek.com/blog/gojek/ke-singapura-bareng-teman"
          />
          <BlogCard
            imageUrl={blog5}
            title="Eksplor Singapura Bareng Keluarga!"
            description="Gojek / 26 Dec 2024"
            link="https://www.gojek.com/blog/gojek/ke-singapura-bareng-keluarga"
          />
          <BlogCard
            imageUrl={blog6}
            title="Flash Sale Spesial Gajian Desember di GoFood, Hemat s.d 50% untuk Menu Favorit!"
            description="Gofood / 25 Dec 2024"
            link="https://www.gojek.com/blog/gofood/flash-sale-gajian-desember-menu-diskon-50-persen"
          />
          <BlogCard
            imageUrl={blog7}
            title="LOMBA MAKAN Akhir Tahun Dapet Iphone 15 Pro & Emas"
            description="Gofood / 19 Dec 2024"
            link="https://www.gojek.com/blog/gofood/lomba-makan-dari-gofood"
          />
          <BlogCard
            imageUrl={blog8}
            title="Pilihan Tepat untuk Liburan yang Tak Terlupakan Bareng Gojek dan Archipelago Hotels!"
            description="Gojek / 17 Dec 2024"
            link="https://www.gojek.com/blog/gojek/yuklibur-gojek-archipelago"
          />
          <BlogCard
            imageUrl={blog9}
            title="Pakai GoRide dan beli tiket Commuterline bisa sekaligus pakai GoTransit"
            description="Gotransit / 17 Dec 2024"
            link="https://www.gojek.com/blog/gotransit/goride-transit"
          />
        </div>
        <div id="section3" className="flex flex-col md:flex-row md:mt-20">
          <div className="md:w-2/3">

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
          <div className="md:w-1/3 order-first md:order-none md:h-screen top-0 md:sticky relative bg-blend-darken flex justify-center items-center flex-col">
            <img
              src={bgNews}
              alt="News Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
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

import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { NewsCard } from "../components/NewsCard";

const Blog = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c6c8db1d6e114390bf336f0f13312dc7`
      );
      setNews(response.data.articles.slice(0, 10));
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
        <div id="section3" className="flex flex-col md:flex-row md:mt-20">
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
